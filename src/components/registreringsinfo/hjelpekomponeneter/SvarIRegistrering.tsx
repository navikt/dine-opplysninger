import { format } from 'date-fns';
import noLocale  from 'date-fns/locale/nb';
import { Normaltekst } from 'nav-frontend-typografi';
import * as React from 'react';
import './SvarIRegistrering.less';

import { RegistreringsType, SvarTekster } from '../../../datatyper/registreringData';
import Lesmerpanel from 'nav-frontend-lesmerpanel';
import Element from 'nav-frontend-typografi/lib/element';

const VinsingsLinje = (props: SvarTekster) => (
    <li>
        <Normaltekst>
            <strong>{props.sporsmal}</strong> {props.svar}
        </Normaltekst>
    </li>);

export default function SvarIRegistrering(props: {registrering: RegistreringsType}) {
    if (!props.registrering) {
        return (
            <section className="svar-i-registrering">
                <Element className="svar-i-registrering__tittel"> Svar fra registrering </Element>
                <Normaltekst className="svar-i-registrering__beskrivelse">
                    Registreringsinformasjon er ikke tilgjenglig.
                </Normaltekst>
            </section>
        );
    }

    const {opprettetDato, besvarelse, teksterForBesvarelse} = props.registrering;
    const opprettet = format(opprettetDato, 'DD. MMMM YYYY', {locale: noLocale});

    return (
        <section className="svar-i-registrering">
            <Element tag="h2" className="svar-i-registrering__tittel">  Svar fra registrering  </Element>
            <Normaltekst className="svar-i-registrering__beskrivelse">
                Opplysningene du registrerte {opprettet}
            </Normaltekst>
            <Lesmerpanel lukkTekst="" apneTekst="Se besvarelsen din">
                <ul className="svar-i-registrering__liste">
                    {
                        teksterForBesvarelse
                            .filter(it => besvarelse[it.sporsmalId] !== 'INGEN_SVAR')
                            .map((it) => <VinsingsLinje key={it.sporsmalId} {...it}/>)
                    }
                </ul>
                <Normaltekst className="kontaktVeileder">
                    Du bør informere veilederen din dersom situasjonen din endrer seg. <br />
                    Du kan endre her eller i <a href="/aktivitetsplan/dialog/ny" className="lenke">dialogen med veileder.</a>
                </Normaltekst>
            </Lesmerpanel>
        </section>
    );
}
