import { format } from 'date-fns';
import noLocale from 'date-fns/locale/nb';
import { Normaltekst } from 'nav-frontend-typografi';
import * as React from 'react';
import './SvarIRegistrering.less';

import { RegistreringsType, SvarTekster } from '../../../datatyper/registreringData';
import Lesmerpanel from 'nav-frontend-lesmerpanel';
import Element from 'nav-frontend-typografi/lib/element';
import { CONTEXT_PATH } from '../../../utils/constants';

const VinsingsLinje = (props: SvarTekster) => (
	<li>
		<Normaltekst>
			<strong>{props.sporsmal}</strong> {props.svar}
		</Normaltekst>
	</li>
);

const SisteStilingLinje = (props: { sisteStilling: RegistreringsType['sisteStilling'] }) => {
	if (!props.sisteStilling) {
		return null;
	}
	return (
		<VinsingsLinje
			key="sistestilling"
			sporsmal="Din siste stilling: "
			svar={props.sisteStilling.label}
			sporsmalId="sistestilling"
		/>
	);
};

export default function SvarIRegistrering(props: { registrering: RegistreringsType }) {
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

	const { opprettetDato, besvarelse, teksterForBesvarelse } = props.registrering;
	const opprettet = format(opprettetDato, 'DD. MMMM YYYY', { locale: noLocale });

	return (
		<section className="svar-i-registrering">
			<Element tag="h2" className="svar-i-registrering__tittel">
				{' '}
				Opplysninger fra registeringen din{' '}
			</Element>
			<Normaltekst className="svar-i-registrering__beskrivelse">
				Her er opplysningene du registrerte {opprettet}
			</Normaltekst>
			<Lesmerpanel lukkTekst="" apneTekst="Se opplysningene ">
				<ul className="svar-i-registrering__liste">
					{teksterForBesvarelse
						.filter(it => besvarelse[it.sporsmalId] !== 'INGEN_SVAR')
						.map(it => (
							<VinsingsLinje key={it.sporsmalId} {...it} />
						))}
					<SisteStilingLinje sisteStilling={props.registrering.sisteStilling} />
				</ul>
				<Normaltekst className="kontaktVeileder">
					<a href={`${CONTEXT_PATH}/aktivitetsplan/dialog/ny`} className="lenke">
						Gi beskjed til veilederen din
					</a>{' '}
					hvis situasjonen din endrer seg
				</Normaltekst>
			</Lesmerpanel>
		</section>
	);
}
