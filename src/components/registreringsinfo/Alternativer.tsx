
export enum SporsmalType {
    hovedmal,
    helseHinder
}

export enum HovedmalAlternativ {
    SAMME_ARBEIDSGIVER = 'Jeg skal tilbake til jobben jeg har',
    SAMME_ARBEIDSGIVER_NY_STILLING = 'Jeg skal tilbake til arbeidsgiveren min, men i ny stilling',
    NY_ARBEIDSGIVER = 'Jeg trenger ny jobb',
    USIKKER = 'Jeg er usikker',
    INGEN_PASSER = 'Ingen av disse alternativene passer',
    IKKE_OPPGITT = ''

}

export function hentTekst(spmId: SporsmalType, alternativ: HovedmalAlternativ) {
    if (spmId === SporsmalType.hovedmal) {
        return HovedmalAlternativ[alternativ];
    }
    return '';
}
