import * as React from 'react';
import './Malhistorikk.less';
import { useState } from 'react';
import { MalType } from './DelMal';
import { hentFremtidigSituasjonList, hentMalList } from '../../api/api';
import { FremtidigSituasjonType, HistorikkType } from '../../datatyper/fremtidigSituasjonType';
import { kombinerHistorikk } from './utils';
import { SituasjonAlternativ } from '../registreringsinfo/Alternativer';
import Modal from 'nav-frontend-modal';
import NavFrontendSpinner from 'nav-frontend-spinner';
import Normaltekst from 'nav-frontend-typografi/lib/normaltekst';
import Systemtittel from 'nav-frontend-typografi/lib/systemtittel';
import Element from 'nav-frontend-typografi/lib/element';
const moment = require('moment');

function Malhistorikk () {
    const [visSkjul, setvisSkjul] = useState(false);
    const [laster, setLaster] = useState(true);
    const [fetchFeil, setFetchFeil] = useState(false);
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

                                        const kombinertHistorikk = kombinerHistorikk(historikkList);
                                        setHistorikk(kombinertHistorikk);
                                        setLaster(false);
                                    })
                                    .catch(() => {
                                        setFetchFeil(true);
                                    });
                            })
                            .catch(() => {
                                setFetchFeil(true);
                            });

                    }
                }}
                className="typo-element lenke-knapp vis-skjul-knapp"
            >
                {!visSkjul ? 'Vis tidligere lagrede mål' : 'Skjul tidligere lagrede mål'}
            </button>
            <Modal
                isOpen={visSkjul}
                onRequestClose={() => setvisSkjul(!visSkjul)}
                closeButton={true}
                contentLabel="Min modalrute"
            >
                <div className="mal-historikk__tittel">
                    <Systemtittel> Tidligere lagrede mål </Systemtittel>
                </div>
                <div className="mal-historikk__liste">
                    {
                        laster
                            ? <NavFrontendSpinner />
                            : <VisHistorikk liste={historikk} fetchFeil={fetchFeil}/>
                    }
                </div>
            </Modal>
        </section>
    );
}

export default Malhistorikk;

/************
* Hjelpe komponenter
*************/
interface VisHistorikkProps {
    liste: HistorikkType[];
    fetchFeil: boolean;
}
function VisHistorikk (props: VisHistorikkProps) {
    const {liste, fetchFeil} = props;
    if (fetchFeil) {
        return <>Feil ved henting av historikk...</>;
    }
    return (
        <>
            {
                liste.length === 0
                    ? <div>Ingen tidligere mål</div>
                    :
                    liste.map((element, i) => {
                        return <HistorikkElement element={element} key={i} />;
                    })

            }
        </>
    );
}

interface HistorikkListeProps {
    element: HistorikkType;
}
function HistorikkElement (props: HistorikkListeProps) {
    const {element} = props;
    return (
        <div className="mal-historikk__liste-element">
            <div className="info typo-element">
                <span className="info__dato">{moment(element.dato).fromNow(true)} siden</span>
                <span className="info__hvem">, skrevet av {element.endretAv}</span>
            </div>
            <Element>Fremtidig situasjon</Element>
            <Normaltekst className="tekst">{SituasjonAlternativ[element.fremtidigSituasjon || SituasjonAlternativ.IKKE_OPPGITT]} </Normaltekst>
            <Element>Forklaring og delmål</Element>
            <Normaltekst className="tekst">{element.mal}</Normaltekst>
        </div>
    );
}
