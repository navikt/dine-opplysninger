import {default as React, useState} from "react";
import GrunnPanel from "../felleskomponenter/grunnPanel";
import {Element, Normaltekst} from "nav-frontend-typografi";
import {Collapse} from "react-collapse";
import ResponsiveRadioGruppe from "../felleskomponenter/responsiveRadio";
import Lenke from "nav-frontend-lenker";
import LenkeKnapp from "../felleskomponenter/lenkeknap";
import NavFrontendSpinner from "nav-frontend-spinner";

const brukerstoteURL = "https://www.nav.no/398761/kontakt-teknisk-brukerst%C3%B8tte-nav.no";


function EndreLagreKnapp(props: { endre: boolean, oppdaterer: boolean, onClick: () => any }) {
    if (props.oppdaterer) {
        return <LenkeKnapp disabled> <NavFrontendSpinner type="S"/> </LenkeKnapp>
    }
    return (
        <LenkeKnapp onClick={props.onClick}>
            {props.endre ? "Lagre" : "Endre"}
        </LenkeKnapp>
    )
}


function JaNeiPanel(props: { titel: string, hidden: boolean, start: boolean, onSave: (status: boolean) => Promise<any> }) {
    const [status, setStatus] = useState(props.start);
    const [eddit, setEddit] = useState(false);
    const [valgt, setValgt] = useState(props.start ? "true" : "false");
    const [error, setError] = useState(false);
    const [oppdaterer, setOppdaterer] = useState(false);

    function click() {
        if (oppdaterer) {
            return;
        }
        const newState = valgt === "true";

        if (eddit) {
            setOppdaterer(true);
            setError(false);
            props.onSave(newState)
                .then(() => setOppdaterer(false))
                .catch(() => {
                    setError(true);
                    setOppdaterer(false);
                });
        }

        setStatus(newState);
        setEddit(!eddit);
    }

    return (
        <>
            <GrunnPanel feil={error} hidden={props.hidden} border>
                <div className="spacebetween">
                    <Normaltekst> <Element tag="span"> {props.titel}: </Element> {status ? "Ja" : "Nei"} </Normaltekst>
                    <EndreLagreKnapp endre={eddit} onClick={click} oppdaterer={oppdaterer}/>
                </div>
                <Collapse isOpened={eddit}>
                    <ResponsiveRadioGruppe radios={
                        [
                            {label: 'Ja', value: 'true'},
                            {label: 'Nei', value: 'false'},
                        ]
                    } name={props.titel} legend="" checked={valgt} onChange={(event, value) => setValgt(value)}/>
                </Collapse>
            </GrunnPanel>
            <div hidden={!error} role="alert" className="grunnpanel feiltekst">
                <Normaltekst>
                    Denne ble ikke oppdatert. <br />
                    Du kan prøve på nytt senere eller kontakte <Lenke href={brukerstoteURL}>teknisk brukerstøtte</Lenke>
                </Normaltekst>
            </div>
        </>
    )
}

export default JaNeiPanel