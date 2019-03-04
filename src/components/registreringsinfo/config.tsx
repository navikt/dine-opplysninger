import { ORDINAER, RegistreringDataType, SYKMELDT } from '../../datatyper/registreringData';
import {
    elementLiSvar, elementLiMedLenke, elementLiMedTekst,
} from './utils';
import {
    teksterGruppeTittel,
    teksterOrdinaer,
    teksterSykmeldt,
    teksterTilLenker,
    teksterUtdCV
} from './tekster';

const gruppeUtdanningCV = (registreringState: RegistreringDataType) => {
    const elementUtdanning = elementLiSvar(registreringState, 'utdanning', teksterUtdCV);

    if (elementUtdanning === null) {
        return null;
    }
    return {
        gruppeTittel: teksterGruppeTittel.utdanningCV,
        gruppeInnhold: [
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
            {
                id: 'cv',
                element: elementLiMedLenke('cv', teksterTilLenker)
            },
            {
                id: 'jobbProfil',
                element: elementLiMedLenke('jobbProfil', teksterTilLenker)
            },
        ]
    };
};

const ordinaerConfig = (registreringState: RegistreringDataType) => [
    {
        gruppeTittel: teksterGruppeTittel.svarIRegistrering,
        gruppeInnhold: [
            {
                id: 'dinSituasjon',
                element: elementLiSvar(registreringState, 'dinSituasjon', teksterOrdinaer)
            },
        ],
    },
    gruppeUtdanningCV(registreringState),
    {
        gruppeTittel: teksterGruppeTittel.behov,
        gruppeInnhold: [{
                id: 'helseHinder',
                element: elementLiSvar(registreringState, 'helseHinder', teksterOrdinaer)            },
            {
                id: 'andreForhold',
                element: elementLiSvar(registreringState, 'andreForhold', teksterOrdinaer)
            }],
    },

];

const sykmeldtConfig = (registreringState: RegistreringDataType) => [
    {
        gruppeTittel: teksterGruppeTittel.svarIRegistrering,
        gruppeInnhold: [
            {
                id: 'dinSituasjon',
                element: elementLiMedTekst('dinSituasjon', teksterSykmeldt)
            },
            {
                id: 'fremtidigSituasjon',
                element: elementLiSvar(registreringState, 'fremtidigSituasjon', teksterSykmeldt)
            },
            {
                id: 'tilbakeIArbeid',
                element: elementLiSvar(registreringState, 'tilbakeIArbeid', teksterSykmeldt)
            }
        ],
    },
    gruppeUtdanningCV(registreringState),
    {
        gruppeTittel: teksterGruppeTittel.behov,
        gruppeInnhold: [
            {
                id: 'helseHinder',
                element: elementLiSvar(registreringState, 'helseHinder', teksterSykmeldt)
            },
            {
                id: 'sykeFravaer',
                element: elementLiMedLenke('sykeFravaer', teksterTilLenker)
            }
            ],
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
