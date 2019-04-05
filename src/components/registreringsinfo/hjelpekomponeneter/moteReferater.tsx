import * as React from 'react';
import { Normaltekst } from 'nav-frontend-typografi';
import { ElementLiMedLenke, Visning, VisningsListe, VisningsTitel } from './hjelpere';
import { teksterGruppeBeskrivelse, teksterGruppeTittel } from '../tekster';

const MoteReferater = () => (
    <Visning>
        <VisningsTitel> {teksterGruppeTittel.moteReferater} </VisningsTitel>
        <Normaltekst> {teksterGruppeBeskrivelse.moteReferater} </Normaltekst>
        <VisningsListe>
            <ElementLiMedLenke tekstId="moteReferater"/>
        </VisningsListe>
    </Visning>
);

export default MoteReferater;
