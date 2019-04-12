import * as React from 'react';
import './DelMal.less';
import Systemtittel from 'nav-frontend-typografi/lib/systemtittel';
import Normaltekst from 'nav-frontend-typografi/lib/normaltekst';
import { useEffect, useState } from 'react';
import { hentMal } from '../../../api/api';
import { teksterMaal } from '../tekster';
import Vise from './Vise';
import Redigere from './Redigere';

export interface MalType {
    mal: string | null;
    endretAv: string;
    dato: string | null;
}

function DelMal () {

    const [malState, setMalState] = useState('');
    const [laster, setLaster] = useState(true);
    const [feilState, setFeilState] = useState(false);
    const [skalEndreState, setSkalEndreState] = useState(false);

    useEffect(() => {
        hentMal()
            .then((res: MalType) => {
                if (!!res.mal) {
                    setMalState(res.mal);
                }
                setLaster(false);
            })
            .catch(() => {
                setFeilState(true);
            });
    }, []);

    if (feilState) {
        return (
            <div className="del-mal">
                <Systemtittel className="del-mal-tittel">{teksterMaal.delMalTittel}</Systemtittel>
                <Normaltekst>Feil ved henting av forklaring og delmål. Prøv igjen på nytt.</Normaltekst>
            </div>
        );
    }

    return(
        <div className="del-mal">
            {
                !skalEndreState
                    ?
                    <Vise malState={malState} setSkalEndreState={setSkalEndreState} laster={laster}/>
                    :
                    <Redigere malState={malState} setMalState={setMalState} setSkalEndreState={setSkalEndreState}/>
            }
        </div>
    );
}

export default DelMal;
