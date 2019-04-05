import moment from "moment";
import {Normaltekst} from "nav-frontend-typografi";
import * as React from "react";
import {FormattedMessage} from "react-intl"

import {Visning, VisningsListe, VisningsTitel} from "./hjelpere";
import {teksterGruppeBeskrivelse, teksterGruppeTittel, teksterTilLenker} from "../tekster";
import {RegistreringsType} from "../../../datatyper/registreringData";

export default function SvarIRegistrering(props: {registrering: RegistreringsType}) {
    const {opprettetDato, besvarelse, teksterForBesvarelse} = props.registrering;
    const opprettet = moment(opprettetDato).format('DD. MMMM YYYY');

    return (
        <Visning viseble={
            true
        }>
            <VisningsTitel> {teksterGruppeTittel.svarIRegistrering} </VisningsTitel>
            <Normaltekst>
                <FormattedMessage
                    id="gruppeBeskrivelse"
                    defaultMessage={teksterGruppeBeskrivelse.svarIRegistrering}
                    values={{
                        registrertDato: opprettet,
                        infoVeilLenke: <a href={teksterTilLenker.informereVeilederenHref} className="lenke">{teksterTilLenker.informereVeilederenLenke}</a>
                    }}
                />
            </Normaltekst>
            <VisningsListe>
                {
                    teksterForBesvarelse
                        .filter(it => besvarelse[it.sporsmalId] !== 'INGEN_SVAR')
                        .map(it => <li><Normaltekst><strong>{it.sporsmal}</strong> {it.svar}</Normaltekst></li>)
                }
            </VisningsListe>
        </Visning>
    )
}
