export enum HovedmalAlternativ {
	SAMME_ARBEIDSGIVER = 'Jeg skal tilbake til jobben jeg har',
	SAMME_ARBEIDSGIVER_NY_STILLING = 'Jeg skal tilbake til arbeidsgiveren min, men i ny stilling',
	NY_ARBEIDSGIVER = 'Jeg trenger ny jobb',
	JOBBE_MER = 'Jeg vil jobbe mer',
	IKKE_OPPGITT = ''
}

export interface HovedmalType {
	alternativId: HovedmalAlternativ;
	endretAv?: string;
	dato?: string | null;
}

export interface HistorikkType {
	[propName: string]: string | null | HovedmalAlternativ;
}
