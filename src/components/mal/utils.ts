import { SituasjonAlternativ } from '../registreringsinfo/Alternativer';
import { HistorikkType } from '../../datatyper/fremtidigSituasjonType';

export function kombinerHistorikk(historikk: HistorikkType[]) {

    return historikk
        .sort((a , b) => {
            if (b.dato === null || a.dato === null) {
                return 0;
            }
            return new Date(b.dato).getTime() - new Date(a.dato).getTime();
        })
        .filter(o => o.mal !== null)
        .filter(o => o.fremtidigSituasjon !== '')
        .map((a, i) => {

            let malRes = historikk.slice(i + 1).find(o => !!o.mal) || {mal: ''};
            let malFre = historikk.slice(i + 1).find(o => !!o.fremtidigSituasjon) || {fremtidigSituasjon: SituasjonAlternativ.IKKE_OPPGITT};

            const fem = a.fremtidigSituasjon ? a.fremtidigSituasjon : malFre.fremtidigSituasjon;
            const mal = a.mal ? a.mal : malRes.mal;

            return {
                mal: mal,
                fremtidigSituasjon: fem,
                endretAv: a.endretAv,
                dato: a.dato

            };
        });
}