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

export const teksterVeilederBanner = {
    veilederBanner: 'Veilederen din bruker følgende informasjon for å vurdere behovene dine for veiledning.',
};

export const teksterOrdinaer = {
    dinSituasjon: 'Situasjon',
    sisteStilling: 'Siste stilling',
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
    utdanningGodkjent: 'Utdanning godkjent i Norge'
};

export const teksterTilLenker = {
    cv: 'CV',
    cvLenke: 'Gå til din CV',
    cvHref: 'https://arbeidsplassen.nav.no/cv',
    jobbProfil: 'Jobbprofil',
    jobbProfilLenke: 'Gå til din jobbprofil',
    jobbProfilHref: 'https://arbeidsplassen.nav.no',
    moteReferater: 'Møtereferater',
    moteReferaterHref: '/aktivitetsplan?filter=mote&filter=samtalereferat',
    moteReferaterLenke: 'Se referatene i Aktivitetsplanen',
    sykeFravaer: 'Sykmeldinger, oppfølgingsplaner og annen relevant informasjon om sykefraværet ditt.',
    sykeFravaerLenke: 'Gå til ditt sykefravær',
    sykeFravaerHref: '/sykefravaer',
    informereVeilederenHref: '/aktivitetsplan/dialog/ny',
    informereVeilederenLenke: 'informere veilederen'
};

export const teksterGruppeTittel = {
    svarIRegistrering: 'Svar i registrering',
    behov: 'Behov',
    jobbprofilCV: 'Jobbprofil og CV',
    moteReferater: 'Møtereferater',
    sykeFravaer: 'Ditt sykefravær'
};

export const teksterGruppeBeskrivelse = {
    jobbprofilCV: 'Hold opplysningene i CV-en og jobbprofilen din oppdatert for å få riktig veiledning.',
    moteReferater: 'Møtene mellom deg og veilederen din er relevante for vurderingen av behovene dine.',
    svarIRegistrering: 'Opplysningene under er fra da du registrerte deg {registrertDato}. Hvis situasjonen din endrer seg, bør du {infoVeilLenke} din om dette.',
};