import { ElementLiMedLenke, Visning, VisningsListe, VisningsTitel } from './hjelpere';
import { teksterGruppeTittel } from '../tekster';
import * as React from 'react';
import { SYKMELDT } from '../../../datatyper/registreringData';

const Sykefravaer = (props: {type: string}) => (
    <Visning hidden={props.type !== SYKMELDT}>
        <VisningsTitel> {teksterGruppeTittel.sykeFravaer} </VisningsTitel>
        <VisningsListe>
            <ElementLiMedLenke tekstId="sykeFravaer"/>
        </VisningsListe>
    </Visning>
);

export default Sykefravaer;
