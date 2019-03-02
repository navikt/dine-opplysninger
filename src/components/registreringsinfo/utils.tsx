import * as React from 'react';
import { RegistreringDataType } from '../../datatyper/registreringData';
import { teksterType } from './tekster';

export const hentSvar = (svarState: any, sporsmalId: string) => { // tslint:disable-line
    const sporsmalsindeks = svarState.findIndex((data: any) => data.sporsmalId === sporsmalId); // tslint:disable-line
    return (sporsmalsindeks >= 0) ? svarState[sporsmalsindeks].svar : undefined;
};

export const elementLiSvar = (registreringState: RegistreringDataType, spmId: string, tekster: teksterType) => {
    const svar = hentSvar(registreringState.registrering.teksterForBesvarelse, spmId);
    return svar
        ?
        (
            <li className="typo-normal">
                <strong>{tekster[spmId]}:&nbsp;</strong>{svar}
            </li>
        )
        :
        null;
};

export const elementLiMedTekst = (tekstId: string, tekster: teksterType) => {
    return (
        <li className="typo-normal">
            <strong>{tekster[tekstId]}:&nbsp;</strong>{tekster[`${tekstId}Tekst`]}
        </li>
    );
};

export const elementLiMedLenke = (tekstId: string, tekster: teksterType) => {
    return (
        <li className="typo-normal lenke-element">
            <section className="lenke-tittel">
                <strong>{tekster[tekstId]}</strong>
                <br/>
                {tekster[`${tekstId}Beskrivelse`]}
            </section>
            <a href={tekster[`${tekstId}Href`]} className="lenke">{tekster[`${tekstId}Lenke`]}</a>
        </li>
    );
};
