import * as React from "react";
import {Normaltekst} from "nav-frontend-typografi";
import {teksterGruppeBeskrivelse, teksterGruppeTittel} from "../tekster";
import {ElementLiMedLenke, Visning, VisningsListe, VisningsTitel} from './hjelpere'
import {SYKMELDT} from "../../../datatyper/registreringData";

export default function JobbprofilCV(props: {type: string, fremtidigSituasjon: string | null}) {
    return (
        <Visning viseble={
            props.type !== SYKMELDT
            || props.fremtidigSituasjon === 'NY_ARBEIDSGIVER'
            || props.fremtidigSituasjon === 'USIKKER'
        }>
            <VisningsTitel> {teksterGruppeTittel.jobbprofilCV} </VisningsTitel>
            <Normaltekst> {teksterGruppeBeskrivelse.jobbprofilCV} </Normaltekst>
            <VisningsListe>
                <ElementLiMedLenke tekstId="cv"/>
                <ElementLiMedLenke tekstId="jobbProfil"/>
            </VisningsListe>
        </Visning>
    )
}
