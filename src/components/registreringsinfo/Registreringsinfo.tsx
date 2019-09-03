import React from 'react';
import { format } from 'date-fns';
import noLocale from 'date-fns/locale/nb';
import { Normaltekst } from 'nav-frontend-typografi';
import { RegistreringsType, SvarTekster } from '../../api/data/registrering-data';
import Lesmerpanel from 'nav-frontend-lesmerpanel';
import Element from 'nav-frontend-typografi/lib/element';
import { CONTEXT_PATH } from '../../utils/constants';
import { useAppStore } from '../../stores/app-store';
import './Registreringsinfo.less';

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

export default function Registreringsinfo() {
	const { registrering: registreringData } = useAppStore();
	if (!registreringData.registrering) {
		return (
			<section className="registreringsinfo">
				<Element className="registreringsinfo__tittel"> Svar fra registrering </Element>
				<Normaltekst className="registreringsinfo__beskrivelse">
					Registreringsinformasjon er ikke tilgjenglig.
				</Normaltekst>
			</section>
		);
	}

	const { opprettetDato, besvarelse, teksterForBesvarelse } = registreringData.registrering;
	const opprettet = format(opprettetDato, 'DD. MMMM YYYY', { locale: noLocale });

	return (
		<section className="registreringsinfo">
			<Element tag="h2" className="registreringsinfo__tittel">
				Opplysninger fra registeringen din
			</Element>
			<Normaltekst className="registreringsinfo__beskrivelse">
				Her er opplysningene du registrerte {opprettet}
			</Normaltekst>
			<Lesmerpanel lukkTekst="" apneTekst="Se opplysningene">
				<ul className="registreringsinfo__liste">
					{teksterForBesvarelse
						.filter((it: SvarTekster) => besvarelse[it.sporsmalId] !== 'INGEN_SVAR')
						.map((it: SvarTekster) => (
							<VinsingsLinje key={it.sporsmalId} {...it} />
						))}
					<SisteStilingLinje sisteStilling={registreringData.registrering.sisteStilling} />
				</ul>
				<Normaltekst className="kontaktVeileder">
					<a href={`${CONTEXT_PATH}/aktivitetsplan/dialog/ny`} className="lenke">
						Gi beskjed til veilederen din
					</a> hvis situasjonen din endrer seg
				</Normaltekst>
			</Lesmerpanel>
		</section>
	);
}
