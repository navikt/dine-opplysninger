import * as React from 'react';
import './Malhistorikk.less';
import { Collapse } from 'react-collapse';
import { useState } from 'react';
import { MalType } from './DelMal';
import { hentFremtidigSituasjonList, hentMalList } from '../../api/api';
import { FremtidigSituasjonType, HistorikkType } from '../../datatyper/fremtidigSituasjonType';
import Normaltekst from 'nav-frontend-typografi/lib/normaltekst';
import Undertittel from 'nav-frontend-typografi/lib/undertittel';
import { hentHistorikk } from './utils';
import { SituasjonAlternativ } from '../registreringsinfo/Alternativer';
const moment = require('moment');

function Malhistorikk () {
    const [visSkjul, setvisSkjul] = useState(false);
    const [historikk, setHistorikk] = useState<Array<HistorikkType>>([]);

    return(
        <section className="mal-historikk">
            <button
                onClick={() => {
                    setvisSkjul(!visSkjul);

                    if (!visSkjul) {
                        hentMalList()
                            .then((malListe: Array<MalType&HistorikkType>) => {

                                hentFremtidigSituasjonList()
                                    .then((fremtidigsituasjonListe: Array<FremtidigSituasjonType&HistorikkType>) => {

                                        const historikkList = (malListe as Array<HistorikkType>).concat(fremtidigsituasjonListe);

                                        setHistorikk(hentHistorikk(historikkList));
                                    });
                            });
                    }
                }}
                className="typo-element lenke-knapp vis-skjul-knapp"
            >
                {!visSkjul ? 'Vis tidligere lagrede mål' : 'Skjul tidligere lagrede mål'}
            </button>
            <Collapse isOpened={visSkjul}>
                <div className="mal-historikk__liste">
                {
                    historikk.length === 0
                        ? <div>Ingen tidligere mål</div>
                        :
                        historikk.map((a, i) => {
                        let malEllerFremtidig = (
                                <div>
                                    <Undertittel>Fremtidig situasjon</Undertittel>
                                    <Normaltekst>{SituasjonAlternativ[a.fremtidigSituasjon || SituasjonAlternativ.IKKE_OPPGITT]} </Normaltekst>
                                    <Undertittel>Forklaring og delmål</Undertittel>
                                    <Normaltekst>{a.mal}</Normaltekst>
                                </div>
                            );

                        return (
                            <div key={i} className="mal-historikk__liste-element">
                                <div className="info typo-element">
                                    <span className="info__dato">{moment(a.dato).fromNow(true)} siden</span>
                                    <span className="info__hvem">, skrevet av {a.endretAv}</span>
                                </div>
                                {malEllerFremtidig}
                            </div>
                        );
                    })
                }
                </div>
            </Collapse>
        </section>
    );
}

export default Malhistorikk;