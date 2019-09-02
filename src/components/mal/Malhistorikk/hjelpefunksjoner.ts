import { HovedmalAlternativ } from '../../registreringsinfo/Alternativer';
import { HistorikkType } from '../../../datatyper/hovedmalType';
import { hentFremtidigSituasjonList, hentMalList } from '../../../api/api';
import { Dispatch, SetStateAction } from 'react';

interface FetchHistorikkenPropTypes {
	setHistorikk: Dispatch<SetStateAction<HistorikkType[]>>;
	setLaster: Dispatch<SetStateAction<boolean>>;
	setFetchFeil: Dispatch<SetStateAction<boolean>>;
}
export const fetchHistorikken = (props: FetchHistorikkenPropTypes) => {
	Promise.all([hentMalList(), hentFremtidigSituasjonList()])
		.then(v => {
			const malListe = v[0];
			const fremtidigsituasjonListe = v[1];
			const historikkList = (malListe as HistorikkType[]).concat(fremtidigsituasjonListe);
			const kombinertHistorikk = kombinerHistorikk(historikkList);
			props.setHistorikk(kombinertHistorikk);
			props.setLaster(false);
		})
		.catch(() => {
			props.setFetchFeil(true);
		});
};

export function kombinerHistorikk(historikk: HistorikkType[]) {
	const filtrertSortertHistorikk = historikk
		.filter(o => o.mal !== null)
		.filter(o => o.tekst !== '')
		.sort((a, b) => {
			const aDato = a.dato || new Date();
			const bDato = b.dato || new Date();
			return new Date(bDato).getTime() - new Date(aDato).getTime();
		});

	return filtrertSortertHistorikk.map((a, i) => {
		const forrigeMal = filtrertSortertHistorikk.slice(i + 1).find(o => !!o.mal) || { mal: '' };
		const forrigeSituasjon = filtrertSortertHistorikk.slice(i + 1).find(o => !!o.tekst) || {
			tekst: HovedmalAlternativ.IKKE_OPPGITT
		};

		const tekst = a.tekst ? a.tekst : forrigeSituasjon.tekst;
		const mal = a.mal ? a.mal : forrigeMal.mal;

		return {
			mal,
			tekst,
			endretAv: a.endretAv,
			dato: a.dato
		};
	});
}
