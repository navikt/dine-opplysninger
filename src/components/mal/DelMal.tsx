import * as React from 'react';
import './DelMal.less';
import Systemtittel from 'nav-frontend-typografi/lib/systemtittel';
import Normaltekst from 'nav-frontend-typografi/lib/normaltekst';
import { useEffect, useState } from 'react';
import { hentMal, oppdaterMal } from '../../api/api';
import Textarea from 'nav-frontend-skjema/lib/textarea';
import { MouseEventHandler } from 'react';

export interface MalType {
    mal: string;
    endretAv: string;
    dato: string;
}

function DelMal () {

    const [malState, setMalState] = useState('');
    const [feilState, setFeilState] = useState(false);
    const [skalEndreState, setSkalEndreState] = useState(false);

    useEffect(() => {
        hentMal()
            .then((res: MalType) => {
                setMalState(res.mal);
            })
            .catch(() => {
                setFeilState(true);
            });
    }, []);

    if (feilState) {
        return <div className="mal-container">Oops det skjedde en feil ...</div>;
    }
    
    return(
        <div className="del-mal">
            {
                !skalEndreState
                ?
                    (
                        <>
                            <Systemtittel className="del-mal-tittel">Forklaring og delmål</Systemtittel>
                            <Normaltekst className="del-mal-beskrivelse">{malState}</Normaltekst>
                            <DelMalKnapp
                                tekst="Endre"
                                onClick={(e: React.MouseEvent<HTMLElement>) => {
                                    e.preventDefault();
                                    setSkalEndreState(true);
                                }}
                            />
                        </>
                    )
                    :
                    (
                        <>
                            <Textarea
                                textareaClass="typo-normal"
                                value={malState}
                                onChange={(e) => {
                                    const mal = (e.target as HTMLInputElement).value;
                                    setMalState(mal);
                                }}
                                label={<Systemtittel className="del-mal-tittel">Forklaring og delmål</Systemtittel>}
                            />
                            <DelMalKnapp
                                tekst="Lagre"
                                onClick={(e: React.MouseEvent<HTMLElement>) => {
                                    e.preventDefault();
                                    oppdaterMal(malState)
                                        .then(() => {
                                            setSkalEndreState(false);
                                        });
                                }}
                            />
                        </>
                    )

            }
        </div>
    );
}

export default DelMal;

interface DelMalKnappType {
    tekst: string;
    onClick: MouseEventHandler;
}
const DelMalKnapp = ({tekst, onClick}: DelMalKnappType) => {
    return (
        <a
            role="button"
            href="/"
            className="del-mal-knapp typo-element"
            onClick={onClick}
        >
            {tekst}
        </a>
    );
};