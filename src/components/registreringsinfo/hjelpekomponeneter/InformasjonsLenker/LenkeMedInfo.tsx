import * as React from 'react';
import Normaltekst from 'nav-frontend-typografi/lib/normaltekst';
import Element from 'nav-frontend-typografi/lib/element';
import Chevron from 'nav-frontend-chevron/lib/chevron';
import './InformasjonsLenker.less';
interface LenkeProps {
	ikon: React.ReactElement<HTMLObjectElement>;
	tittel: string;
	beskrivelse: string;
	lenketekst: string;
	lenke: string;
	visible: boolean;
}
const LenkeMedInfo = (props: LenkeProps) => {
	if (!props.visible) {
		return null;
	}
	return (
		<li className="lenke-med-info">
			<Element className="lenke-med-info__tittel">
				{props.ikon} {props.tittel}
			</Element>
			<Normaltekst className="lenke-med-info__beskrivelse">{props.beskrivelse}</Normaltekst>
			<a href={props.lenke} className="lenke lenke-med-info__lenke">
				{props.lenketekst}
				<Chevron type={'høyre'} />
			</a>
		</li>
	);
};

export default LenkeMedInfo;
