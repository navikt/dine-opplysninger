import * as React from 'react';
import { Normaltekst } from 'nav-frontend-typografi';
import { ElementLiMedLenke, Visning, VisningsListe, VisningsTitel } from './hjelpere';
import { SYKMELDT } from '../../../datatyper/registreringData';

interface JobbprofilCVProps {
    type: string,
    fremtidigSituasjon: string | null
}

export default function JobbprofilCV(props: JobbprofilCVProps) {
    const visible  =  props.type !== SYKMELDT
        || props.fremtidigSituasjon === 'NY_ARBEIDSGIVER'
        || props.fremtidigSituasjon === 'USIKKER';

    return (
        <Visning hidden={!visible} >
            <VisningsTitel>Jobbprofil og CV</VisningsTitel>
            <Normaltekst>Hold opplysningene i CV-en og jobbprofilen din oppdatert for å få riktig veiledning.</Normaltekst>
            <VisningsListe>
                <ElementLiMedLenke
                    tekstId="cv"
                    beskrivelse="CV"
                    lenketekst="Gå til din CV"
                    lenke="https://arbeidsplassen.nav.no/cv"
                />
                <ElementLiMedLenke
                    tekstId="jobbProfil"
                    beskrivelse="Jobbprofil"
                    lenketekst="Gå til din jobbprofil"
                    lenke="https://arbeidsplassen.nav.no"
                />
            </VisningsListe>
        </Visning>
    );
}
