import * as React from 'react';
import './DelMal.less';
import Systemtittel from 'nav-frontend-typografi/lib/systemtittel';
import Normaltekst from 'nav-frontend-typografi/lib/normaltekst';
import { Dispatch, useEffect, useState } from 'react';
import { hentMal, oppdaterMal } from '../../api/api';
import Textarea from 'nav-frontend-skjema/lib/textarea';
import { MouseEventHandler } from 'react';
import { SetStateAction } from 'react';
import { teksterMaal } from './tekster';

export interface MalType {
    mal: string | null;
    endretAv: string;
    dato: string | null;
}

function DelMal () {

    const [malState, setMalState] = useState('');
    const [feilState, setFeilState] = useState(false);
    const [skalEndreState, setSkalEndreState] = useState(false);

    useEffect(() => {
        hentMal()
            .then((res: MalType) => {
                if (!!res.mal) {
                    setMalState(res.mal);
                }
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
    const mal = props.malState.length === 0 ? teksterMaal.default : props.malState;
    return (
        <>
            <Systemtittel className="del-mal-tittel">{teksterMaal.delMalTittel}</Systemtittel>
            <Normaltekst className="del-mal-beskrivelse">{mal}</Normaltekst>
            <div className="del-mal-aksjoner">
                <DelMalKnapp
                    tekst="Endre"
                    onClick={(e: React.MouseEvent<HTMLElement>) => {
                        e.preventDefault();
                        props.setSkalEndreState(true);
                    }}
                />
            </div>
        </>
    );
};

interface RedigerDelMalProps {
    malState: string;
    setMalState: Dispatch<SetStateAction<string>>;
    setSkalEndreState: Dispatch<SetStateAction<boolean>>;
}
const MALTEKST_MAKSLENGDE = 500;
const RedigerDelMal = (props: RedigerDelMalProps) => {
    const [erMaksLengde, setErMaksLengde] = useState(false);
    const [skalLagres, setSkalLagres] = useState(false);
    const [originalMal] = useState(props.malState);

    let feilProp = null;
    if (erMaksLengde) {
        feilProp = { feil: { feilmelding: teksterMaal.feilmelding} };
    }

    const oppdatererErMaksLengdeState = (mal: string) => mal.length > MALTEKST_MAKSLENGDE ? setErMaksLengde(true) : setErMaksLengde(false);
    const oppdatererSkalLagresState = (mal: string) => mal.trim() === props.malState.trim() ? setSkalLagres(false) : setSkalLagres(true);

    return (
        <>
            <Textarea
                textareaClass="typo-normal"
                value={props.malState}
                onChange={(e) => {
                    const mal = (e.target as HTMLInputElement).value;
                    oppdatererErMaksLengdeState(mal);
                    oppdatererSkalLagresState(mal);
                    props.setMalState(mal);
                }}
                label={<Systemtittel className="del-mal-tittel">{teksterMaal.delMalTittel}</Systemtittel>}
                maxLength={MALTEKST_MAKSLENGDE}
                {...feilProp}
            />
            <div className="del-mal-aksjoner">
                <DelMalKnapp
                    tekst="Lagre"
                    onClick={(e: React.MouseEvent<HTMLElement>) => {
                        e.preventDefault();
                        if (erMaksLengde) { return; }

                        if (skalLagres) {
                            oppdaterMal(props.malState)
                                .then(() => {
                                    props.setSkalEndreState(false);
                                });
                        } else {
                            props.setSkalEndreState(false);
                        }
                    }}
                />
                <DelMalKnapp
                    tekst="Avbryt"
                    onClick={(e: React.MouseEvent<HTMLElement>) => {
                        e.preventDefault();
                        props.setMalState(originalMal);
                        props.setSkalEndreState(false);
                    }}
                />
            </div>
        </>
    );
};