import { ElementLiMedLenke, Visning, VisningsListe, VisningsTitel } from './hjelpere';
import * as React from 'react';
import { SYKMELDT } from '../../../datatyper/registreringData';

const Sykefravaer = (props: {type: string}) => (
    <Visning hidden={props.type !== SYKMELDT}>
        <VisningsTitel> Ditt sykefravær </VisningsTitel>
        <VisningsListe>
            <ElementLiMedLenke
                tekstId="sykeFravaer"
                beskrivelse="Sykmeldinger, oppfølgingsplaner og annen relevant informasjon om sykefraværet ditt."
                lenketekst="Gå til ditt sykefravær"
                lenke="/sykefravaer"
            />
        </VisningsListe>
    </Visning>
);

export default Sykefravaer;
