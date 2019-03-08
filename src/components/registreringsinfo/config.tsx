import { ORDINAER, RegistreringDataType, SYKMELDT } from '../../datatyper/registreringData';
import {
    elementLiSvar, elementLiMedLenke } from './utils';
import {
    teksterGruppeBeskrivelse,
    teksterGruppeTittel,
    teksterOrdinaer,
    teksterSykmeldt,
    teksterTilLenker,
    teksterUtdCV
} from './tekster';

const gruppeJobbprofilCV = () => {
    return [
        {
            id: 'cv',
            element: elementLiMedLenke('cv', teksterTilLenker)
        },
        {
            id: 'jobbProfil',
            element: elementLiMedLenke('jobbProfil', teksterTilLenker)
        },
    ];
};

const dinSituasjon = (registreringState: RegistreringDataType) => {
    return [
        {
            id: 'dinSituasjon',
            element: elementLiSvar(registreringState, 'dinSituasjon', teksterOrdinaer)
        },
    ];
};

const gruppeUtdanning = (registreringState: RegistreringDataType) => {
    const elementUtdanning = elementLiSvar(registreringState, 'utdanning', teksterUtdCV);

    if (elementUtdanning === null) {
        return [];
    }
    return [
        {
            id: 'utdanning',
            element: elementUtdanning
        },
        {
            id: 'utdanningGodkjent',
            element: elementLiSvar(registreringState, 'utdanningGodkjent', teksterUtdCV)
        },
        {
            id: 'utdanningBestatt',
            element: elementLiSvar(registreringState, 'utdanningBestatt', teksterUtdCV)
        },
    ];
};

const gruppeHelse = (registreringState: RegistreringDataType) => {
    return [{
        id: 'helseHinder',
        element: elementLiSvar(registreringState, 'helseHinder', teksterOrdinaer)            },
        {
            id: 'andreForhold',
            element: elementLiSvar(registreringState, 'andreForhold', teksterOrdinaer)
        }];
};

const ordinaerConfig = (registreringState: RegistreringDataType) => [
    {
        gruppeTittel: teksterGruppeTittel.jobbprofilCV,
        gruppeBeskrivelse: teksterGruppeBeskrivelse.jobbprofilCV,
        gruppeInnhold: gruppeJobbprofilCV(),
    },
    {
        gruppeTittel: teksterGruppeTittel.moteReferater,
        gruppeBeskrivelse: teksterGruppeBeskrivelse.moteReferater,
        gruppeInnhold: [],
    },
    {
        gruppeTittel: teksterGruppeTittel.svarIRegistrering,
        gruppeBeskrivelse: teksterGruppeBeskrivelse.svarIRegistrering,
        gruppeInnhold: dinSituasjon(registreringState)
            .concat(gruppeUtdanning(registreringState))
            .concat(gruppeHelse(registreringState)),
    },
];

const sykmeldtConfig = (registreringState: RegistreringDataType) => [
    {
        gruppeTittel: teksterGruppeTittel.jobbprofilCV,
        gruppeBeskrivelse: teksterGruppeBeskrivelse.jobbprofilCV,
        gruppeInnhold: gruppeJobbprofilCV(),
    },
    {
        gruppeTittel: teksterGruppeTittel.moteReferater,
        gruppeBeskrivelse: teksterGruppeBeskrivelse.moteReferater,
        gruppeInnhold: [],
    },
    {
        gruppeTittel: teksterGruppeTittel.svarIRegistrering,
        gruppeBeskrivelse: teksterGruppeBeskrivelse.svarIRegistrering,
        gruppeInnhold: [{
                id: 'fremtidigSituasjon',
                element: elementLiSvar(registreringState, 'fremtidigSituasjon', teksterSykmeldt)
            }]
            .concat(gruppeUtdanning(registreringState))
            .concat([{
                    id: 'helseHinder',
                    element: elementLiSvar(registreringState, 'helseHinder', teksterSykmeldt)
                }]),
    },
];

export const registreringsInfoConfig = (registreringState: RegistreringDataType) => {
    switch (registreringState.type) {
        case ORDINAER:
            return ordinaerConfig(registreringState);
        case SYKMELDT:
            return sykmeldtConfig(registreringState);
        default:
            return [];
    }
};
