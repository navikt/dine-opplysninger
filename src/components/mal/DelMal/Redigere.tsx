import * as React from 'react';
import { Dispatch, SetStateAction, useContext, useState } from 'react';
import { teksterMaal } from '../tekster';
import Textarea from 'nav-frontend-skjema/lib/textarea';
import NavFrontendSpinner from 'nav-frontend-spinner';
import { KnappeGruppe } from '../Knappegruppe';
import { oppdaterMal } from '../../../api/api';
import Element from 'nav-frontend-typografi/lib/element';
import Hjelpetekst from 'nav-frontend-hjelpetekst/lib/hjelpetekst';
import GrunnPanel from '../../felleskomponenter/grunnPanel';
import { Feilmelding } from '../../hensyn/jaNeiPanel';
import { loggEndretDelmal, loggFeilTilBruker } from '../../../metrikker/frontendlogger';
import { RegistreringDataContext } from '../../../context/registreringData/RegistreringDataProvider';

interface RedigerDelMalProps {
    malState: string;
    setMalState: Dispatch<SetStateAction<string>>;
    setSkalEndreState: Dispatch<SetStateAction<boolean>>;
}
const MALTEKST_MAKSLENGDE = 500;

const Redigere = (props: RedigerDelMalProps) => {
    const [erMaksLengde, setErMaksLengde] = useState(false);
    const [skalLagres, setSkalLagres] = useState(false);
    const [originalMal] = useState(props.malState);
    const [laster, setLaster] = useState(false);
    const [feilIFetchData, setFeilIFetchData] = useState(false);
    const registreringsData = useContext(RegistreringDataContext);

    const oppdatererErMaksLengdeState = (mal: string) => mal.length > MALTEKST_MAKSLENGDE ? setErMaksLengde(true) : setErMaksLengde(false);
    const oppdatererSkalLagresState = (mal: string) => mal.trim() === props.malState.trim() ? setSkalLagres(false) : setSkalLagres(true);

    let feilProp = null;
    if (erMaksLengde) {
        feilProp = { feil: { feilmelding: teksterMaal.feilmelding} };
    }

    return (
        <GrunnPanel className="del-mal redigere" border={true} feil={feilIFetchData}>
            <div className="hjelpetekst-info">
                <Hjelpetekst
                    id="hjelpetekst-maal"
                    type="midt"
                    tittel="test"
                >
                    <span className="hjelpetekst-maal-tittel">Eksempler:</span>
                    <span className="hjelpetekst-maal-list">
                        <span className="hjelpetekst-maal-list-item">
                            Jeg ønsker å ta fagbrev for å komme i fast jobb. For å klare dette må jeg først ta opp fag, så skaffe læringplass.
                        </span>
                        <span className="hjelpetekst-maal-list-item">
                            Jeg ønsker å fortsette i jobben jeg har, men kan ikke jobbe mer enn 40%. For å klare dette må jeg snakke med arbeidsgiveren min og NAV om tilrettelegging.
                        </span>
                        <span className="hjelpetekst-maal-list-item">
                            Jeg ønsker å jobbe med mennesker. Jeg trenger tilrettelegging på grunn av.... For å skaffe jobb kan jeg søke bredt og bruke nettverket mitt.
                        </span>
                    </span>
                </Hjelpetekst>
            </div>
            <Textarea
                textareaClass="typo-normal"
                value={props.malState}
                disabled={laster || feilIFetchData}
                onChange={(e) => {
                    const mal = (e.target as HTMLInputElement).value;
                    oppdatererErMaksLengdeState(mal);
                    oppdatererSkalLagresState(mal);
                    props.setMalState(mal);
                }}
                label={<Element className="del-mal-tittel">{teksterMaal.delMalTittel}</Element>}
                maxLength={MALTEKST_MAKSLENGDE}
                {...feilProp}
            />

            {laster ? <NavFrontendSpinner className="hoyre"/> : null}
            <Feilmelding vises={feilIFetchData}/>
            <KnappeGruppe
                onSave={() => {
                    if (erMaksLengde) { return; }

                    if (skalLagres) {
                        setLaster(true);
                        oppdaterMal(props.malState)
                            .then(() => {
                                props.setSkalEndreState(false);
                                setLaster(false);
                                loggEndretDelmal(registreringsData.type);

                            })
                            .catch(() => {
                                setFeilIFetchData(true);
                                setLaster(false);
                                loggFeilTilBruker('oppdaterMal');

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
        </GrunnPanel>
    );
};

export default Redigere;
