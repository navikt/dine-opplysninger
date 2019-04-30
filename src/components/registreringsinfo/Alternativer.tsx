
export enum SporsmalType {
    fremtidigSituasjon,
    helseHinder
}

export enum SituasjonAlternativ {
    SAMME_ARBEIDSGIVER = 'Jeg skal tilbake til jobben jeg har',
    SAMME_ARBEIDSGIVER_NY_STILLING = 'Jeg skal tilbake til arbeidsgiveren min, men i ny stilling',
    NY_ARBEIDSGIVER = 'Jeg trenger ny jobb',
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
