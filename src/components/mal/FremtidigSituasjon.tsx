import React, { useEffect, useState } from 'react';
import './FremtidigSituasjon.less';
import { hentTekst, SituasjonAlternativ, SporsmalType } from '../registreringsinfo/Alternativer';
import { FremtidigSituasjonType } from '../../datatyper/fremtidigSituasjonType';
import { Collapse } from 'react-collapse';
import { AlternativGruppe } from './AlternativGruppe';
import { hentFremtidigSituasjon, oppdaterFremtidigSituasjon } from '../../api/api';

function FremtidigSituasjon () {
    const [endreVisning, setSkalEndreState] = useState(false);
    const [situasjonState, setSituasjonState] = useState(SituasjonAlternativ.IKKE_OPPGITT);
    const [knappeNavnState, setKnappState] = useState('Legg til');
    const [feil, setFeilState] = useState(false);

    useEffect(() => {
        hentFremtidigSituasjon()
            .then((res: FremtidigSituasjonType) => {
                setSituasjonState(res.fremtidigSituasjon);
                if (res.fremtidigSituasjon !== SituasjonAlternativ.IKKE_OPPGITT) {
                    setKnappState('Endre');
                }
            })
            .catch(() => {
                setFeilState(true);
            });
    }, []);

    function lagreValg(valgtAlternativ: string) {
        if (SituasjonAlternativ[valgtAlternativ] === situasjonState || situasjonState === undefined) {
           setSkalEndreState(false);
           return;
        }
        oppdaterFremtidigSituasjon(valgtAlternativ)
            .then((situasjon: FremtidigSituasjonType) => {
                setSkalEndreState(false);
                setSituasjonState(situasjon.fremtidigSituasjon);
                setKnappState('Endre');
            });
    }

    function onCancel() {
        setSkalEndreState(false);
    }

    return (
        <div className="fremtidig-situasjon">
            <li className="typo-normal lenke-element endre-knapp-boks">
                <div>
                    <strong>Fremtidig situasjon: </strong>
                    <span>{hentTekst(SporsmalType.fremtidigSituasjon, situasjonState)}</span>
                </div>
                <button className="typo-element lenke-knapp" id="btn-legg-til-situasjon" hidden={endreVisning || feil} onClick={() => setSkalEndreState(!endreVisning)}>{knappeNavnState}</button>

            </li>
            <Collapse isOpened={endreVisning}>
                <AlternativGruppe lagretSvar={situasjonState} onSave={lagreValg} onCancel={() => onCancel()}/>
            </Collapse>
        </div>
    );
}

export default FremtidigSituasjon;
