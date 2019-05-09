import { HovedmalAlternativ } from '../../registreringsinfo/Alternativer';
import { HistorikkType } from '../../../datatyper/hovedmalType';
import { hentFremtidigSituasjonList, hentMalList } from '../../../api/api';
import { Dispatch, SetStateAction } from 'react';

interface FetchHistorikkenPropTypes {
    setHistorikk: Dispatch<SetStateAction<Array<HistorikkType>>>;
    setLaster: Dispatch<SetStateAction<boolean>>;
    setFetchFeil: Dispatch<SetStateAction<boolean>>;
}
export const fetchHistorikken = (props: FetchHistorikkenPropTypes) => {
    Promise.all([hentMalList(), hentFremtidigSituasjonList()]).then((v) => {

        const malListe = v[0];
        const fremtidigsituasjonListe = v[1];
        const historikkList = (malListe as Array<HistorikkType>).concat(fremtidigsituasjonListe);
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
        .filter(o => o.fremtidigSituasjon !== '')
        .sort((a, b) => {
            const aDato = a.dato || new Date();
            const bDato = b.dato || new Date();
            return new Date(bDato).getTime() - new Date(aDato).getTime();
        });

    return filtrertSortertHistorikk.map((a, i) => {
            let forrigeMal = filtrertSortertHistorikk.slice(i + 1).find(o => !!o.mal) || {mal: ''};
            let forrigeSituasjon = filtrertSortertHistorikk.slice(i + 1).find(o => !!o.fremtidigSituasjon) || {fremtidigSituasjon: HovedmalAlternativ.IKKE_OPPGITT};

            const fremtidigSituasjon = a.fremtidigSituasjon ? a.fremtidigSituasjon : forrigeSituasjon.fremtidigSituasjon;
            const mal = a.mal ? a.mal : forrigeMal.mal;

            return {
                mal,
                fremtidigSituasjon,
                endretAv: a.endretAv,
                dato: a.dato

            };
        });
}
