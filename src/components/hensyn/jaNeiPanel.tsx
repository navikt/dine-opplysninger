import { default as React, useState } from 'react';
import GrunnPanel from '../felleskomponenter/grunnPanel';
import { Element, Normaltekst } from 'nav-frontend-typografi';
import { Collapse } from 'react-collapse';
import Lenke from 'nav-frontend-lenker';
import EndreLagreKnapp from './endreLagreKnapp';
import JaNeiRadio from './JaNeiRadio';

const brukerstoteURL = 'https://www.nav.no/398761/kontakt-teknisk-brukerst%C3%B8tte-nav.no';

function Feilmelding(props: { vises: boolean }) {
    return (
        <div hidden={!props.vises} role="alert" className="grunnpanel feiltekst">
            <Normaltekst>
                Denne ble ikke oppdatert.
                Du kan prøve på nytt senere eller kontakte <Lenke href={brukerstoteURL}>teknisk brukerstøtte</Lenke>
            </Normaltekst>
        </div>
    );
}

function JaNeiPanel(props: { titel: string, hidden: boolean, start: boolean, onSave: (status: boolean) => Promise<Object> }) {
    const [status, setStatus] = useState(props.start);
    const [eddit, setEddit] = useState(false);
    const [error, setError] = useState(false);
    const [valgt, setValgt] = useState(props.start);
    const [oppdaterer, setOppdaterer] = useState(false);

    function click() {
        if (oppdaterer) {
            return;
        }
        const newState = valgt;

        if (eddit && status !== valgt) {
            setOppdaterer(true);
            setError(false);
            props.onSave(newState)
                .then(() => {
                    setOppdaterer(false);
                    setStatus(newState);
                })
                .catch(() => {
                    setError(true);
                    setOppdaterer(false);
                });
        }

        setEddit(!eddit);
    }

    return (
        <>
            <GrunnPanel feil={error} hidden={props.hidden} border={true}>
                <div className="spacebetween">
                    <Normaltekst> <Element tag="span"> {props.titel}: </Element> {status ? 'Ja' : 'Nei'} </Normaltekst>
                    <EndreLagreKnapp endre={eddit} onClick={click} oppdaterer={oppdaterer}/>
                </div>
                <Collapse isOpened={eddit}>
                    <JaNeiRadio titel={props.titel} valg={valgt} onChange={setValgt}/>
                </Collapse>
            </GrunnPanel>
            <Feilmelding vises={error}/>
        </>
    );
}

export default JaNeiPanel;