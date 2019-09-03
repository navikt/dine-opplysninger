import React from 'react';
import { useEffect, useState } from 'react';
import './DelMal.less';
import { hentMal } from '../../../api/api';
import Vise from './Vise';
import Redigere from './Redigere';
import { FetchStateTypes } from '../Hovedmal';

export interface MalType {
	mal: string | null;
	endretAv: string;
	dato: string | null;
}

function DelMal() {
	const modus = new URL(window.location.href).searchParams.get('modus');

	const [malState, setMalState] = useState('');
	const [skalEndreState, setSkalEndreState] = useState(modus === 'rediger');
	const [fetchState, setFetchState] = useState(FetchStateTypes.OK);

	useEffect(() => {
		setFetchState(FetchStateTypes.LOADING);
		hentMal()
			.then((res: MalType) => {
				if (!!res.mal) {
					setMalState(res.mal);
				}
				setFetchState(FetchStateTypes.OK);
			})
			.catch(() => {
				setFetchState(FetchStateTypes.FAILURE);
			});
	}, []);

	return (
		<>
			{skalEndreState ? (
				<Redigere malState={malState} setMalState={setMalState} setSkalEndreState={setSkalEndreState} />
			) : null}
			{!skalEndreState ? (
				<Vise malState={malState} setSkalEndreState={setSkalEndreState} fetchStatus={fetchState} />
			) : null}
		</>
	);
}

export default DelMal;
