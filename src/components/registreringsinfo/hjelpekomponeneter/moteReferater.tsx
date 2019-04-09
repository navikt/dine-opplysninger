import * as React from 'react';
import { Normaltekst } from 'nav-frontend-typografi';
import { ElementLiMedLenke, Visning, VisningsListe, VisningsTitel } from './hjelpere';

const MoteReferater = () => (
    <Visning>
        <VisningsTitel>Møtereferater</VisningsTitel>
        <Normaltekst>Møtene mellom deg og veilederen din er relevante for vurderingen av behovene dine.</Normaltekst>
        <VisningsListe>
            <ElementLiMedLenke
                tekstId="moteReferater"
                beskrivelse="Møtereferater"
                lenketekst="Se referatene i Aktivitetsplanen"
                lenke="/aktivitetsplan?filter=mote&filter=samtalereferat"
            />
        </VisningsListe>
    </Visning>
);

export default MoteReferater;
