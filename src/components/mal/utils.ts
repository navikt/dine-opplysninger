import { SituasjonAlternativ } from '../registreringsinfo/Alternativer';
import { HistorikkType } from '../../datatyper/fremtidigSituasjonType';

export function kombinerHistorikk(historikk: HistorikkType[]) {

    return historikk
        .sort((a, b) => {
            const aDato = a.dato || new Date();
            const bDato = b.dato || new Date();
            return new Date(bDato).getTime() - new Date(aDato).getTime();
        })
        .filter(o => o.mal !== null)
        .filter(o => o.fremtidigSituasjon !== '')
        .map((a, i) => {
            let forrigeMal = historikk.slice(i + 1).find(o => !!o.mal) || {mal: ''};
            let forrigeSituasjon = historikk.slice(i + 1).find(o => !!o.fremtidigSituasjon) || {fremtidigSituasjon: SituasjonAlternativ.IKKE_OPPGITT};

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