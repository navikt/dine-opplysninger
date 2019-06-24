import { HovedmalAlternativ } from '../components/registreringsinfo/Alternativer';

export interface HovedmalType {
    alternativId: HovedmalAlternativ;
    endretAv?: string;
    dato: string;
}

export interface HistorikkType {
    [propName: string]: string | null | HovedmalAlternativ;
}
