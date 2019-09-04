import React from 'react';
import LenkeKnapp from '../felleskomponenter/LenkeKnapp';

interface KnappegruppeProps {
	onSave: () => void;
	onCancel: () => void;
}

export function KnappeGruppe(props: KnappegruppeProps) {
	return (
		<div className="knappegruppe">
			<LenkeKnapp onClick={() => props.onCancel()}>Avbryt</LenkeKnapp>
			<LenkeKnapp onClick={() => props.onSave()}>Lagre</LenkeKnapp>
		</div>
	);
}
