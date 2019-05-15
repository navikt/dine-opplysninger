import React, { useEffect, useState } from 'react';
import './Hovedmal.less';
import { HovedmalAlternativ } from '../registreringsinfo/Alternativer';
import { HovedmalType } from '../../datatyper/hovedmalType';
import { Collapse } from 'react-collapse';
import { AlternativGruppe } from './AlternativGruppe';
import { hentHovedmal, oppdaterHovedmal } from '../../api/api';
import NavFrontendSpinner from 'nav-frontend-spinner';
import { RegistreringDataType, RegistreringsType } from '../../datatyper/registreringData';
import { registreringDataContextConsumerHoc } from '../../context/registreringData/RegistreringDataProvider';

enum FetchStateTypes {
    LOADING,
    FAILURE,
    OK
}

export function getNyesteHovedmal(vedtakinfo: HovedmalType, registrering: RegistreringsType): HovedmalAlternativ {
    const registreringsDato = registrering.opprettetDato;
    const registreringsBesvarelse = registrering.besvarelse;
    const registreringHovedmal = registreringsBesvarelse.fremtidigSituasjon ? registreringsBesvarelse.fremtidigSituasjon : 'IKKE_OPPGITT';

    if (!registreringsDato) {
        return vedtakinfo.alternativId;
    } else if (!vedtakinfo.dato) {
        return HovedmalAlternativ[registreringHovedmal];
    } else if (registreringsDato < vedtakinfo.dato) {
        return vedtakinfo.alternativId;
    } else if (vedtakinfo.dato < registreringsDato) {
        return HovedmalAlternativ[registreringHovedmal];
    }
    return HovedmalAlternativ.IKKE_OPPGITT;

}

export function Hovedmal (props: RegistreringDataType) {
    const [endreVisning, setSkalEndreState] = useState(false);
    const [alternativState, setSituasjonState] = useState(HovedmalAlternativ.IKKE_OPPGITT);
    const [fetchState, setFetchState] = useState(FetchStateTypes.OK);

    const knappeTekst = alternativState === HovedmalAlternativ.IKKE_OPPGITT ? 'Legg til' : 'Endre';

    useEffect(() => {
        setFetchState(FetchStateTypes.LOADING);
        hentHovedmal()
            .then((res: HovedmalType) => {
                const hovedmal = getNyesteHovedmal(res, props.registrering);
                setSituasjonState(hovedmal);
                setFetchState(FetchStateTypes.OK);
            })
            .catch(() => {
                setFetchState(FetchStateTypes.FAILURE);
            });
    }, []);

    function lagreValg(valgtAlternativ: string) {
        if (HovedmalAlternativ[valgtAlternativ] === alternativState || alternativState === undefined) {
           setSkalEndreState(false);
           return;
        }

        setFetchState(FetchStateTypes.LOADING);
        oppdaterHovedmal(valgtAlternativ, HovedmalAlternativ[valgtAlternativ])
            .then((situasjon: HovedmalType) => {
                setSkalEndreState(false);
                setSituasjonState(situasjon.alternativId);
                setFetchState(FetchStateTypes.OK);
            });
    }

    function visInnhold() {
        return endreVisning
            ?
            (
                <Collapse isOpened={true}>
                    <AlternativGruppe lagretSvar={alternativState} onSave={lagreValg} onCancel={() => onCancel()}/>
                </Collapse>
            )
            : null;
    }

    function onCancel() {
        setSkalEndreState(false);
    }

    return (
        <div className="hovedmal">
            <div className="typo-normal lenke-element endre-knapp-boks">
                <div>
                    <strong>Mål: </strong>

                    <span>{HovedmalAlternativ[alternativState]}</span>
                </div>
                {fetchState !== FetchStateTypes.OK ?
                    <NavFrontendSpinner /> :
                    <button className="typo-element lenke-knapp" id="btn-legg-til-situasjon" hidden={endreVisning} onClick={() => setSkalEndreState(!endreVisning)}>{knappeTekst}</button>
                }
            </div>
            {fetchState === FetchStateTypes.OK ?
                visInnhold()
                : null
            }
        </div>
    );
}

export default registreringDataContextConsumerHoc<{}>(Hovedmal);
