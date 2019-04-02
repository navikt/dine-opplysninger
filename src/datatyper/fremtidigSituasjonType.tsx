import { SituasjonAlternativ } from '../components/registreringsinfo/Alternativer';

export interface FremtidigSituasjonType {
    fremtidigSituasjon: SituasjonAlternativ;
    endretAv?: string;
    dato?: string | null;
}

export interface HistorikkType {
    [propName: string]: string | null | SituasjonAlternativ;
}
