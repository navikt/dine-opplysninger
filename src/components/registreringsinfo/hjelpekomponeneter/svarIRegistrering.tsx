import { format } from 'date-fns';
import noLocale  from 'date-fns/locale/nb';
import { Normaltekst } from 'nav-frontend-typografi';
import * as React from 'react';

import { Visning, VisningsListe, VisningsTitel } from './hjelpere';
import { RegistreringsType, SvarTekster } from '../../../datatyper/registreringData';
import Lesmerpanel from 'nav-frontend-lesmerpanel';

const VinsingsLinje = (props: SvarTekster) => (
    <li>
        <Normaltekst>
            <strong>{props.sporsmal}</strong> {props.svar}
        </Normaltekst>
    </li>);

export default function SvarIRegistrering(props: {registrering: RegistreringsType}) {
    const {opprettetDato, besvarelse, teksterForBesvarelse} = props.registrering;
    const opprettet = format(opprettetDato, 'DD. MMMM YYYY', {locale: noLocale});

    return (
        <Visning>
            <VisningsTitel> Svar i registrering </VisningsTitel>
            <Normaltekst>
                Opplysningene du registrerte {opprettet}
            </Normaltekst>
            <Lesmerpanel lukkTekst="" apneTekst="Se besvarelsen din">
                <VisningsListe>
                    {
                        teksterForBesvarelse
                            .filter(it => besvarelse[it.sporsmalId] !== 'INGEN_SVAR')
                            .map((it) => <VinsingsLinje key={it.sporsmalId} {...it}/>)
                    }
                </VisningsListe>
                <Normaltekst className="kontaktVeileder">
                    Du bør informere veilederen din dersom situasjonen din endrer seg. <br />
                    Du kan endre her eller i <a href="/aktivitetsplan/dialog/ny" >dialogen med veileder.</a>
                </Normaltekst>
            </Lesmerpanel>
        </Visning>
    );
}
