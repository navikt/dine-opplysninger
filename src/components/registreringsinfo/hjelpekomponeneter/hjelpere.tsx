
import * as React from "react";
import {teksterTilLenker} from "../tekster";
import {Innholdstittel} from "nav-frontend-typografi";


export const ElementLiMedLenke = (props: {tekstId: string}) => (
        <li className="typo-normal lenke-element" key={props.tekstId}>
            <section className="lenke-tittel">
                <strong>{teksterTilLenker[props.tekstId]}</strong>
                <br/>
                {teksterTilLenker[`${props.tekstId}Beskrivelse`]}
            </section>
            <a href={teksterTilLenker[`${props.tekstId}Href`]} className="lenke">{teksterTilLenker[`${props.tekstId}Lenke`]}</a>
        </li>
    );



export const Visning = (props: {children: React.ReactNode, viseble : boolean}) => {
    if(!props.viseble) {
        return null;
    }
    return (
    <section className="registrerings-info__gruppe">
        {props.children}
    </section>
    );
};


export const VisningsTitel = (props: {children: React.ReactNode}) => (
    <Innholdstittel tag="h2" className="gruppe-tittel"> {props.children} </Innholdstittel>
);


export const VisningsListe = (props: {children: React.ReactNode}) => (
    <ul className="gruppe-liste">
        {props.children}
    </ul>
)
