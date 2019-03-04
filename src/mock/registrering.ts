import { ORDINAER, SYKMELDT } from '../datatyper/registreringData';

export const SykmeldtSammeArbeidsgiverFullStilling = {
    'type': SYKMELDT,
    'registrering': {
        'id': 1187,
        'opprettetDato': '2018-12-14T14:32:23.468221+01:00',
        'teksterForBesvarelse': [{'sporsmalId': 'fremtidigSituasjon', 'sporsmal': 'Hva tenker du om din fremtidige situasjon?', 'svar': 'Jeg skal tilbake til jobben jeg har'}, {'sporsmalId': 'tilbakeIArbeid', 'sporsmal': 'Tror du at du kommer tilbake i jobb før du har vært sykmeldt i 52 uker?', 'svar': 'Ja, i full stilling'}],
    }
};

export const SykmeldtNyArbeidsgiverHarUtdanning = {
    'type': SYKMELDT,
    'registrering': {
        'id': 1187,
        'opprettetDato': '2018-12-14T14:32:23.468221+01:00',
        'teksterForBesvarelse': [{'sporsmalId': 'fremtidigSituasjon', 'sporsmal': 'Hva tenker du om din fremtidige situasjon?', 'svar': 'Jeg trenger ny jobb'}, {'sporsmalId': 'utdanningBestatt', 'sporsmal': 'Er utdanningen din bestått?', 'svar': 'Ja'}, {'sporsmalId': 'utdanningGodkjent', 'sporsmal': 'Er utdanningen din godkjent i Norge?', 'svar': 'Nei'}, {'sporsmalId': 'utdanning', 'sporsmal': 'Hva er din høyeste fullførte utdanning?', 'svar': 'Høyere utdanning (1 til 4 år)'}, {'sporsmalId': 'andreForhold', 'sporsmal': 'Er det noe annet enn helsen din som NAV bør ta hensyn til?', 'svar': 'Ja'}],
    }
};

export const SykmeldtNyArbeidsgiverIngenUtdanning = {
    'type': SYKMELDT,
    'registrering': {
        'id': 1187,
        'opprettetDato': '2018-12-14T14:32:23.468221+01:00',
        'teksterForBesvarelse': [{'sporsmalId': 'fremtidigSituasjon', 'sporsmal': 'Hva tenker du om din fremtidige situasjon?', 'svar': 'Jeg trenger ny jobb'}, {'sporsmalId': 'utdanningBestatt', 'sporsmal': 'Er utdanningen din bestått?', 'svar': 'Ikke aktuelt'}, {'sporsmalId': 'utdanningGodkjent', 'sporsmal': 'Er utdanningen din godkjent i Norge?', 'svar': 'Ikke aktuelt'}, {'sporsmalId': 'utdanning', 'sporsmal': 'Hva er din høyeste fullførte utdanning?', 'svar': 'Ingen utdanning'}, {'sporsmalId': 'andreForhold', 'sporsmal': 'Er det noe annet enn helsen din som NAV bør ta hensyn til?', 'svar': 'Ja'}],
    }
};

export const SykmeldtIngenPasser = {
    'type': SYKMELDT,
    'registrering': {
        'id': 1187,
        'opprettetDato': '2018-12-14T14:32:23.468221+01:00',
        'teksterForBesvarelse': [{'sporsmalId': 'fremtidigSituasjon', 'sporsmal': 'Hva tenker du om din fremtidige situasjon?', 'svar': 'Ingen av disse alternativene passer'}],
    }
};

export const OrdinaerMistetJobbenIngenUtdanning = {
    'type': ORDINAER,
    'registrering': {
        'id': 1187,
        'opprettetDato': '2018-12-14T14:32:23.468221+01:00',
        'teksterForBesvarelse': [{'sporsmalId': 'sisteStilling', 'sporsmal': 'Hva er din siste jobb?', 'svar': 'Daglig leder'}, {'sporsmalId': 'utdanning', 'sporsmal': 'Hva er din høyeste fullførte utdanning?', 'svar': 'Ingen utdanning'}, {'sporsmalId': 'utdanningBestatt', 'sporsmal': 'Er utdanningen din bestått?', 'svar': 'Ikke aktuelt'}, {'sporsmalId': 'utdanningGodkjent', 'sporsmal': 'Er utdanningen din godkjent i Norge?', 'svar': 'Ikke aktuelt'}, {'sporsmalId': 'dinSituasjon', 'sporsmal': 'Velg den situasjonen som passer deg best', 'svar': 'Har mistet eller kommer til å miste jobben'}, {'sporsmalId': 'helseHinder', 'sporsmal': 'Har du helseproblemer som hindrer deg i å søke eller være i jobb?', 'svar': 'Ja'}, {'sporsmalId': 'andreForhold', 'sporsmal': 'Har du andre problemer med å søke eller være i jobb?', 'svar': 'Ja'}],
    }
};
export const OrdinaerHarJobbOnskerFortsette = {
    'type': ORDINAER,
    'registrering': {
        'id': 1187,
        'opprettetDato': '2018-12-14T14:32:23.468221+01:00',
        'teksterForBesvarelse': [{'sporsmalId': 'sisteStilling', 'sporsmal': 'Hva er din siste jobb?', 'svar': 'Daglig leder'}, {'sporsmalId': 'utdanning', 'sporsmal': 'Hva er din høyeste fullførte utdanning?', 'svar': 'Ikke aktuelt'}, {'sporsmalId': 'utdanningBestatt', 'sporsmal': 'Er utdanningen din bestått?', 'svar': 'Ikke aktuelt'}, {'sporsmalId': 'utdanningGodkjent', 'sporsmal': 'Er utdanningen din godkjent i Norge?', 'svar': 'Ikke aktuelt'}, {'sporsmalId': 'dinSituasjon', 'sporsmal': 'Velg den situasjonen som passer deg best', 'svar': 'Har jobb og ønsker å fortsette i den jobben jeg er i'}, {'sporsmalId': 'helseHinder', 'sporsmal': 'Har du helseproblemer som hindrer deg i å søke eller være i jobb?', 'svar': 'Ja'}, {'sporsmalId': 'andreForhold', 'sporsmal': 'Har du andre problemer med å søke eller være i jobb?', 'svar': 'Nei'}],
    }
};
