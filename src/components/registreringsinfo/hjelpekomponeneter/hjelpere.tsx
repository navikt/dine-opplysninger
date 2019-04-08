
import * as React from 'react';
import { Innholdstittel } from 'nav-frontend-typografi';

interface ElementLiMedLenkeProps {
    tekstId: string;
    beskrivelse: string;
    lenketekst: string;
    lenke: string;
}

export const ElementLiMedLenke = (props: ElementLiMedLenkeProps) => (
        <li className="typo-normal lenke-element" key={props.tekstId}>
            <section className="lenke-tittel">
                <strong>{props.beskrivelse}</strong>
                <br/>
            </section>
            <a href={props.lenke} className="lenke">{props.lenketekst}</a>
        </li>
    );

interface VisningProps {
    children: React.ReactNode;
    hidden?: boolean;
}

export const Visning = (props: VisningProps) => {
    if (!!props.hidden) {
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
);
