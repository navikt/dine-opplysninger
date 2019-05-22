import React, { useEffect, useState } from 'react';
import './Hovedmal.less';
import { HovedmalAlternativ } from '../registreringsinfo/Alternativer';
import { HovedmalType } from '../../datatyper/hovedmalType';
import { Collapse } from 'react-collapse';
import { AlternativGruppe } from './AlternativGruppe';
import { hentHovedmal, oppdaterHovedmal } from '../../api/api';
import NavFrontendSpinner from 'nav-frontend-spinner';
import GrunnPanel from '../felleskomponenter/grunnPanel';
import LenkeKnapp from '../felleskomponenter/lenkeknap';

enum FetchStateTypes {
    LOADING,
    FAILURE,
    OK
}

function Hovedmal () {
    const [endreVisning, setSkalEndreState] = useState(false);
    const [alternativState, setSituasjonState] = useState(HovedmalAlternativ.IKKE_OPPGITT);
    const [fetchState, setFetchState] = useState(FetchStateTypes.OK);

    const knappeTekst = alternativState === HovedmalAlternativ.IKKE_OPPGITT ? 'Legg til' : 'Endre';

    useEffect(() => {
        setFetchState(FetchStateTypes.LOADING);
        hentHovedmal()
            .then((res: HovedmalType) => {
                setSituasjonState(res.alternativId);
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
        <GrunnPanel className="hovedmal" border={true}>
            <div className="typo-normal lenke-element endre-knapp-boks">
                <div>
                    <strong>Mål: </strong>

                    <span>{HovedmalAlternativ[alternativState]}</span>
                </div>
                {fetchState !== FetchStateTypes.OK ?
                    <NavFrontendSpinner /> :
                    <LenkeKnapp id="btn-legg-til-situasjon" hidden={endreVisning} onClick={() => setSkalEndreState(!endreVisning)}>{knappeTekst}</LenkeKnapp>
                }
            </div>
            {fetchState === FetchStateTypes.OK ?
                visInnhold()
                : null
            }
        </GrunnPanel>
    );
}

export default Hovedmal;
