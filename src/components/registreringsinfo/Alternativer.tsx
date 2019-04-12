
export enum SporsmalType {
    fremtidigSituasjon,
    helseHinder
}

export enum SituasjonAlternativ {
    NY_ARBEIDSGIVER = 'Jeg trenger ny jobb',
    SAMME_ARBEIDSGIVER = 'Jeg skal tilbake til jobben jeg har',
    SAMME_ARBEIDSGIVER_NY_STILLING = 'Jeg skal tilbake til arbeidsgiveren min, men i ny stilling',
    USIKKER = 'Jeg er usikker',
    INGEN_PASSER = 'Ingen av disse alternativene passer',
    IKKE_OPPGITT = ''

}

export function hentTekst(spmId: SporsmalType, alternativ: SituasjonAlternativ) {
    if (spmId === SporsmalType.fremtidigSituasjon) {
        return SituasjonAlternativ[alternativ];
    }
    return '';
}
