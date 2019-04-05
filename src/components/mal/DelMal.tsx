import * as React from 'react';
import './DelMal.less';
import Systemtittel from 'nav-frontend-typografi/lib/systemtittel';
import Normaltekst from 'nav-frontend-typografi/lib/normaltekst';
import { Dispatch, useEffect, useState } from 'react';
import { hentMal, oppdaterMal } from '../../api/api';
import Textarea from 'nav-frontend-skjema/lib/textarea';
import { SetStateAction } from 'react';
import { teksterMaal } from './tekster';
import { KnappeGruppe } from './Knappegruppe';
import NavFrontendSpinner from 'nav-frontend-spinner';

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
                    setLaster(false);
                }
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

    const visningAvDelMal = () => {
        return !skalEndreState
            ?
            <VisDelMal malState={malState} setSkalEndreState={setSkalEndreState} laster={laster}/>
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

interface VisDelMalProps {
    malState: string;
    laster: boolean;
    setSkalEndreState: Dispatch<SetStateAction<boolean>>;
}
const VisDelMal = (props: VisDelMalProps) => {
    const { laster, malState } = props;
    const mal = malState.length === 0 ? teksterMaal.default : malState;
    return (
        <>
            <Systemtittel className="del-mal-tittel">{teksterMaal.delMalTittel}</Systemtittel>
            <Normaltekst className="del-mal-beskrivelse">{mal}</Normaltekst>
            <div className="knappegruppe">
                {
                    laster
                        ? <NavFrontendSpinner/>
                        : <button
                            className="typo-element lenke-knapp"
                            onClick={() => props.setSkalEndreState(true)}
                        >
                            Endre
                        </button>
                }

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
    const [laster, setLaster] = useState(false);
    const [feilIFetchData, setFeilIFetchData] = useState(false);

    const oppdatererErMaksLengdeState = (mal: string) => mal.length > MALTEKST_MAKSLENGDE ? setErMaksLengde(true) : setErMaksLengde(false);
    const oppdatererSkalLagresState = (mal: string) => mal.trim() === props.malState.trim() ? setSkalLagres(false) : setSkalLagres(true);

    let feilProp = null;
    if (erMaksLengde) {
        feilProp = { feil: { feilmelding: teksterMaal.feilmelding} };
    }

    if (feilIFetchData) {
        return <Normaltekst>Det skjedde feil ved lagring. Last siden på nytt og prøv igjen.</Normaltekst>;
    }

    return (
        <>
            <Textarea
                textareaClass="typo-normal"
                value={props.malState}
                disabled={laster}
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
            {
                laster
                    ? <NavFrontendSpinner className="venstre"/>
                    : <KnappeGruppe
                        onSave={() => {
                            if (erMaksLengde) { return; }

                            if (skalLagres) {
                                setLaster(true);
                                oppdaterMal(props.malState)
                                    .then(() => {
                                        props.setSkalEndreState(false);
                                        setLaster(false);
                                    })
                                    .catch(() => {
                                        setFeilIFetchData(true);
                                    });
                            } else {
                                props.setSkalEndreState(false);
                            }
                        }}
                        onCancel={() => {
                            props.setMalState(originalMal);
                            props.setSkalEndreState(false);
                        }}
                    />
            }
        </>
    );
};