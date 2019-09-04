import React from 'react';
import { oppdaterAndreHinder, oppdaterHelseHinder } from '../../api/api';
import JaNeiPanel from './JaNeiPanel';
import { JaNeiIkke } from '../../api/data/situasjon';
import { useAppStore } from '../../stores/app-store';
import './Hensyn.less';

function Hensyn() {
	const { situasjon: { helseHinder, andreHinder } } = useAppStore();
	return (
		<section className="hensyn">
			<JaNeiPanel
				titel="Helseproblemer"
				start={helseHinder ? helseHinder.verdi : JaNeiIkke.INGEN_SVAR}
				onSave={svar => oppdaterHelseHinder(svar)}
			/>
			<JaNeiPanel
				titel="Andre problemer"
				start={andreHinder ? andreHinder.verdi : JaNeiIkke.INGEN_SVAR}
				onSave={svar => oppdaterAndreHinder(svar)}
			/>
		</section>
	);
}

export default Hensyn;
