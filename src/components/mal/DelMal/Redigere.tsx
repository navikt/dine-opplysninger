import * as React from 'react';
import { Dispatch, SetStateAction, useContext, useState } from 'react';
import { teksterMaal } from '../tekster';
import Textarea from 'nav-frontend-skjema/lib/textarea';
import NavFrontendSpinner from 'nav-frontend-spinner';
import { KnappeGruppe } from '../Knappegruppe';
import { oppdaterMal } from '../../../api/api';
import Element from 'nav-frontend-typografi/lib/element';
import { MalHjelpetekst } from './MalHjelpetekst';
import { Feilmelding } from '../../hensyn/jaNeiPanel';
import GrunnPanel from '../../felleskomponenter/grunnPanel';
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
            <MalHjelpetekst/>
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
