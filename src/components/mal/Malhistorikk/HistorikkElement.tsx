import * as React from 'react';
import { HistorikkType } from '../../../datatyper/fremtidigSituasjonType';
import { distanceInWordsToNow } from 'date-fns';
import Element from 'nav-frontend-typografi/lib/element';
import { SituasjonAlternativ } from '../../registreringsinfo/Alternativer';
import Normaltekst from 'nav-frontend-typografi/lib/normaltekst';
import noLocale  from 'date-fns/locale/nb';

interface HistorikkListeProps {
    element: HistorikkType;
}
function HistorikkElement (props: HistorikkListeProps) {
    const {element} = props;
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
            <Normaltekst className="tekst">{SituasjonAlternativ[element.fremtidigSituasjon || SituasjonAlternativ.IKKE_OPPGITT]} </Normaltekst>
            <Element>Forklaring og delmål</Element>
            <Normaltekst className="tekst">{element.mal}</Normaltekst>
        </div>
    );
}

export default HistorikkElement;