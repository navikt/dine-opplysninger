import * as React from 'react';
import { HistorikkType } from '../../../datatyper/hovedmalType';
import { distanceInWordsToNow } from 'date-fns';
import Element from 'nav-frontend-typografi/lib/element';
import Normaltekst from 'nav-frontend-typografi/lib/normaltekst';
import noLocale from 'date-fns/locale/nb';
import { teksterMaal } from '../tekster';

interface HistorikkListeProps {
	element: HistorikkType;
}
function HistorikkElement(props: HistorikkListeProps) {
	const { element } = props;
	const tekst = !!element.tekst ? element.tekst : '-';
	const mal = !!element.mal ? element.mal : '-';

	return (
		<div className="mal-historikk__liste-element">
			<div className="info typo-element">
				<span className="info__dato">
					{distanceInWordsToNow(new Date(element.dato || new Date()), {
						includeSeconds: true,
						locale: noLocale
					})}{' '}
					siden
				</span>
			</div>
			<Element>Mål</Element>
			<Normaltekst className="tekst">{tekst} </Normaltekst>
			<Element>{teksterMaal.delMalTittel}</Element>
			<Normaltekst className="tekst">{mal}</Normaltekst>
		</div>
	);
}

export default HistorikkElement;
