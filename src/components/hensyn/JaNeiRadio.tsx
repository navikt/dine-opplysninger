import ResponsivRadioGruppe from '../felleskomponenter/ResponsivRadio';
import { default as React } from 'react';
import { JaNeiIkke } from '../../api/data/situasjon';

function JaNeiRadio(props: { titel: string; valg: JaNeiIkke; onChange: (selected: JaNeiIkke) => void }) {
	return (
		<ResponsivRadioGruppe
			radios={[{ label: 'Ja', value: JaNeiIkke.JA }, { label: 'Nei', value: JaNeiIkke.NEI }]}
			name={props.titel}
			legend=""
			checked={props.valg}
			onChange={(event, value) => props.onChange(JaNeiIkke[value] ? JaNeiIkke[value] : JaNeiIkke.INGEN_SVAR)}
		/>
	);
}

export default JaNeiRadio;
