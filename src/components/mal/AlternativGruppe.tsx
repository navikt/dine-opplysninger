import { useState } from 'react';
import React from 'react';
import { KnappeGruppe } from './Knappegruppe';
import ResponsivRadioGruppe from '../felleskomponenter/ResponsivRadio';
import {HovedmalAlternativ} from "../../api/data/hovedmal-type";

interface AlternativContainerProps {
	lagretSvar: string;
	onSave: (valg: string) => void;
	onCancel: () => void;
}

export function AlternativGruppe(props: AlternativContainerProps) {
	const [svar, setSvar] = useState(props.lagretSvar);
	const alternativer = Object.keys(HovedmalAlternativ)
		.filter(x => HovedmalAlternativ[x] !== HovedmalAlternativ.IKKE_OPPGITT)
		.map(alternativ => {
			return {
				value: alternativ,
				label: HovedmalAlternativ[alternativ]
			};
		});

	function onCancel() {
		props.onCancel();
		setSvar(props.lagretSvar);
	}

	return (
		<>
			<ResponsivRadioGruppe
				name="alternativ-gruppe"
				legend=""
				radios={alternativer}
				checked={svar}
				onChange={(event, value) => setSvar(value)}
			/>
			<KnappeGruppe onSave={() => props.onSave(svar)} onCancel={() => onCancel()} />
		</>
	);
}
