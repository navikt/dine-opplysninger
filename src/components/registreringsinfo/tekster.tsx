export type teksterType = {
    andreForhold?: string,
    helseHinder?: string,
    fremtidigSituasjon?: string,
    tilbakeIArbeid?: string,
    dinSituasjon?: string,
    utdanning?: string,
    utdanningBestatt?: string,
    utdanningGodkjent?: string,
    cv?: string,
    cvLenke?: string,
    jobbProfil?: string,
    jobbProfilLenke?: string,
    sykeFravaer?: string,
    sykeFravaerLenke?: string,
    sykeFravaerBeskrivelse?: string
};

export const teksterOrdinaer = {
    dinSituasjon: 'Situasjon',
    andreForhold: 'Andre problemer',
    helseHinder: 'Helseproblemer',
};

export const teksterSykmeldt = {
    dinSituasjon: 'Situasjon',
    dinSituasjonTekst: 'Sykmeldt',
    andreForhold: 'Andre hensyn NAV bør ta',
    fremtidigSituasjon: 'Fremtidig situasjon',
    tilbakeIArbeid: 'Tilbake etter 52 uker',
};

export const teksterUtdCV = {
    utdanning: 'Utdanning',
    utdanningBestatt: 'Utdanning bestått',
    utdanningGodkjent: 'Utanning godkjent i Norge'
};

export const teksterTilLenker = {
    cv: 'CV',
    cvLenke: 'Gå til din CV',
    cvHref: 'https://arbeidsplassen.nav.no/cv',
    jobbProfil: 'Jobbprofil',
    jobbProfilLenke: 'Gå til din jobbprofil',
    jobbProfilHref: 'https://arbeidsplassen.nav.no',
    sykeFravaer: 'Sykefravær',
    sykeFravaerLenke: 'Gå til ditt Sykefravær',
    sykeFravaerHref: 'https://tjeneste.nav.no/sykefravaer',
    sykeFravaerBeskrivelse: 'Sykmeldinger, oppfølgingsplaner og annen relevant informasjon om sykefraværet ditt.'
};

export const teksterGruppeTittel = {
    svarIRegistrering: 'Svar i registrering',
    behov: 'Behov',
    utdanningCV: 'Utdanning og CV'
};
