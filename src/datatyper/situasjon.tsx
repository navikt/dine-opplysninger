import {HovedmalType} from './hovedmalType';

export enum JaNeiIkke {
    JA,
    NEI,
    IKKE_OPPGITT,
}
export interface HensynType {
    verdi: JaNeiIkke;
    dato: string;
}

export interface SisteSituasjon {
    helseHinder?: HensynType;
    andreHinder?: HensynType;
    fremtidigSituasjonData?: HovedmalType;
}