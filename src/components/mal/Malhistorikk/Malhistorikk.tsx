import * as React from 'react';
import './Malhistorikk.less';
import { useState } from 'react';
import { HistorikkType } from '../../../datatyper/fremtidigSituasjonType';
import { fetchHistorikken } from './hjelpefunksjoner';
import Modal from 'nav-frontend-modal';
import NavFrontendSpinner from 'nav-frontend-spinner';
import Systemtittel from 'nav-frontend-typografi/lib/systemtittel';
import HistorikkVise from './HistorikkVise';

function Malhistorikk () {
    const [visSkjul, setvisSkjul] = useState(false);
    const [laster, setLaster] = useState(true);
    const [fetchFeil, setFetchFeil] = useState(false);
    const [historikk, setHistorikk] = useState<Array<HistorikkType>>([]);

    const fetchHistorikkProps = {
        setFetchFeil,
        setHistorikk,
        setLaster
    };

    return(
        <section className="mal-historikk">
            <button
                onClick={() => {
                    setvisSkjul(!visSkjul);

                    if (!visSkjul) {
                        setLaster(true);
                        fetchHistorikken(fetchHistorikkProps);
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
                {...{ariaHideApp: false}}
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
