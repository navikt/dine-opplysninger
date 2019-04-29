import React, { useEffect, useState } from 'react';
import './FremtidigSituasjon.less';
import { hentTekst, SituasjonAlternativ, SporsmalType } from '../registreringsinfo/Alternativer';
import { FremtidigSituasjonType } from '../../datatyper/fremtidigSituasjonType';
import { Collapse } from 'react-collapse';
import { AlternativGruppe } from './AlternativGruppe';
import { hentFremtidigSituasjon, oppdaterFremtidigSituasjon } from '../../api/api';
import NavFrontendSpinner from 'nav-frontend-spinner';

enum FetchStateTypes {
    LOADING,
    FAILURE,
    OK
}

function FremtidigSituasjon () {
    const [endreVisning, setSkalEndreState] = useState(false);
    const [situasjonState, setSituasjonState] = useState(SituasjonAlternativ.IKKE_OPPGITT);
    const [fetchState, setFetchState] = useState(FetchStateTypes.OK);

    const knappeTekst = situasjonState === SituasjonAlternativ.IKKE_OPPGITT ? 'Legg til' : 'Endre';

    useEffect(() => {
        setFetchState(FetchStateTypes.LOADING);
        hentFremtidigSituasjon()
            .then((res: FremtidigSituasjonType) => {
                setSituasjonState(res.fremtidigSituasjon);
                setFetchState(FetchStateTypes.OK);
            })
            .catch(() => {
                setFetchState(FetchStateTypes.FAILURE);
            });
    }, []);

    function lagreValg(valgtAlternativ: string) {
        if (SituasjonAlternativ[valgtAlternativ] === situasjonState || situasjonState === undefined) {
           setSkalEndreState(false);
           return;
        }

        setFetchState(FetchStateTypes.LOADING);
        oppdaterFremtidigSituasjon(valgtAlternativ)
            .then((situasjon: FremtidigSituasjonType) => {
                setSkalEndreState(false);
                setSituasjonState(situasjon.fremtidigSituasjon);
                setFetchState(FetchStateTypes.OK);
            });
    }

    function visInnhold() {
        return endreVisning
            ?
            (
                <Collapse isOpened={true}>
                    <AlternativGruppe lagretSvar={situasjonState} onSave={lagreValg} onCancel={() => onCancel()}/>
                </Collapse>
            )
            : null;
    }

    function onCancel() {
        setSkalEndreState(false);
    }

    return (
        <div className="fremtidig-situasjon">
            <div className="typo-normal lenke-element endre-knapp-boks">
                <div>
                    <strong>Mål: </strong>

                    <span>{hentTekst(SporsmalType.fremtidigSituasjon, situasjonState)}</span>
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

export default FremtidigSituasjon;
