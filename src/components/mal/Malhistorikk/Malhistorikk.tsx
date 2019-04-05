import * as React from 'react';
import './Malhistorikk.less';
import { useState } from 'react';
import { MalType } from '../DelMal/DelMal';
import { hentFremtidigSituasjonList, hentMalList } from '../../../api/api';
import { FremtidigSituasjonType, HistorikkType } from '../../../datatyper/fremtidigSituasjonType';
import { kombinerHistorikk } from './hjelpefunksjoner';
import Modal from 'nav-frontend-modal';
import NavFrontendSpinner from 'nav-frontend-spinner';
import Systemtittel from 'nav-frontend-typografi/lib/systemtittel';
import HistorikkVise from './HistorikkVise';

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
                        setLaster(true);

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
                contentLabel="Tidligere lagrede mål"
                className="mal-historikk__modal"
            >
                <div className="mal-historikk__tittel">
                    <Systemtittel> Tidligere lagrede mål </Systemtittel>
                </div>
                <div className="mal-historikk__liste">
                    {
                        laster
                            ? <NavFrontendSpinner />
                            : <HistorikkVise liste={historikk} fetchFeil={fetchFeil}/>
                    }
                </div>
            </Modal>
        </section>
    );
}

export default Malhistorikk;