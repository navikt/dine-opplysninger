import React from 'react';
import { HistorikkType } from '../../../api/data/hovedmal-type';
import HistorikkElement from './HistorikkElement';

interface VisHistorikkProps {
	liste: HistorikkType[];
	fetchFeil: boolean;
}
function HistorikkVise(props: VisHistorikkProps) {
	const { liste, fetchFeil } = props;
	if (fetchFeil) {
		return <>Feil ved henting av tidligere lagrede mål. Prøv igjen på nytt.</>;
	}
	return (
		<>
			{liste.length === 0 ? (
				<div>Ingen tidligere lagrede mål</div>
			) : (
				liste.map((element, i) => {
					return <HistorikkElement element={element} key={i} />;
				})
			)}
		</>
	);
}

export default HistorikkVise;
