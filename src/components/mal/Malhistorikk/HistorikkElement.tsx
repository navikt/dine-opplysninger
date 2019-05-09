import * as React from 'react';
import { HistorikkType } from '../../../datatyper/hovedmalType';
import { distanceInWordsToNow } from 'date-fns';
import Element from 'nav-frontend-typografi/lib/element';
import Normaltekst from 'nav-frontend-typografi/lib/normaltekst';
import noLocale  from 'date-fns/locale/nb';
import { HovedmalAlternativ } from '../../registreringsinfo/Alternativer';

interface HistorikkListeProps {
    element: HistorikkType;
}
function HistorikkElement (props: HistorikkListeProps) {
    const {element} = props;
    const fremtidigSituasjon = !!element.fremtidigSituasjon
        ? HovedmalAlternativ[element.fremtidigSituasjon || HovedmalAlternativ.IKKE_OPPGITT]
        : '-';
    const mal = !!element.mal
        ? element.mal
        : '-';
    return (
        <div className="mal-historikk__liste-element">
            <div className="info typo-element">
                <span className="info__dato">{distanceInWordsToNow(
                    new Date(element.dato || new Date()),
                    {includeSeconds: true, locale: noLocale},
                )} siden</span>
                <span className="info__hvem">, skrevet av {element.endretAv}</span>
            </div>
            <Element>Fremtidig situasjon</Element>
            <Normaltekst className="tekst">{fremtidigSituasjon} </Normaltekst>
            <Element>Forklaring og delmål</Element>
            <Normaltekst className="tekst">{mal}</Normaltekst>
        </div>
    );
}

export default HistorikkElement;
