import * as React from 'react';
import './DelMal.less';
import Systemtittel from 'nav-frontend-typografi/lib/systemtittel';
import Normaltekst from 'nav-frontend-typografi/lib/normaltekst';
import { Dispatch, useEffect, useState } from 'react';
import { hentMal, oppdaterMal } from '../../api/api';
import Textarea from 'nav-frontend-skjema/lib/textarea';
import { MouseEventHandler } from 'react';
import { SetStateAction } from 'react';

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

    const visningAvDelMal = () => {
        return !skalEndreState
            ?
            <VisDelMal malState={malState} setSkalEndreState={setSkalEndreState}/>
            :
            <RedigerDelMal malState={malState} setMalState={setMalState} setSkalEndreState={setSkalEndreState}/>;
    };

    return(
        <div className="del-mal">
            {
                visningAvDelMal()
            }
        </div>
    );
}

export default DelMal;

/*************
* Kompenter
*************/

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

interface VisDelMalProps {
    malState: string;
    setSkalEndreState: Dispatch<SetStateAction<boolean>>;
}
const VisDelMal = (props: VisDelMalProps) => {
    return (
        <>
            <Systemtittel className="del-mal-tittel">Forklaring og delmål</Systemtittel>
            <Normaltekst className="del-mal-beskrivelse">{props.malState}</Normaltekst>
            <DelMalKnapp
                tekst="Endre"
                onClick={(e: React.MouseEvent<HTMLElement>) => {
                    e.preventDefault();
                    props.setSkalEndreState(true);
                }}
            />
        </>
    );
};

interface RedigerDelMal {
    malState: string;
    setMalState: Dispatch<SetStateAction<string>>;
    setSkalEndreState: Dispatch<SetStateAction<boolean>>;
}
const MALTEKST_MAKSLENGDE = 500;
const RedigerDelMal = (props: RedigerDelMal) => {
    return (
        <>
            <Textarea
                textareaClass="typo-normal"
                value={props.malState}
                onChange={(e) => {
                    const mal = (e.target as HTMLInputElement).value;
                    props.setMalState(mal);
                }}
                label={<Systemtittel className="del-mal-tittel">Forklaring og delmål</Systemtittel>}
                maxLength={MALTEKST_MAKSLENGDE}
            />
            <DelMalKnapp
                tekst="Lagre"
                onClick={(e: React.MouseEvent<HTMLElement>) => {
                    e.preventDefault();
                    oppdaterMal(props.malState)
                        .then(() => {
                            props.setSkalEndreState(false);
                        });
                }}
            />
        </>
    );
};