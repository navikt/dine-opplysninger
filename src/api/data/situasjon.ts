import { HovedmalType } from './hovedmal-type';

export enum JaNeiIkke {
	JA = 'JA',
	NEI = 'NEI',
	INGEN_SVAR = 'INGEN_SVAR'
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
