import { RegistreringDataType } from '../datatyper/registreringData';
import { JSONObject } from 'yet-another-fetch-mock/dist/types/types';

/*
*****************
* Ordinaer
*****************
*/
const OrdinaerHarMistetJobben = {
    'type': 'ORDINAER',
    'registrering': {
        'manueltRegistrertAv': null,
        'id': 1287,
        'opprettetDato': '2019-03-28T09:59:04.634592+01:00',
        'besvarelse': {
            'utdanning': 'HOYERE_UTDANNING_5_ELLER_MER',
            'utdanningBestatt': 'NEI',
            'utdanningGodkjent': 'JA',
            'helseHinder': 'JA',
            'andreForhold': 'NEI',
            'sisteStilling': 'INGEN_SVAR',
            'dinSituasjon': 'MISTET_JOBBEN',
            'fremtidigSituasjon': null,
            'tilbakeIArbeid': null
        },
        'teksterForBesvarelse': [
            {
                'sporsmalId': 'sisteStilling',
                'sporsmal': 'Hva er din siste jobb?',
                'svar': 'Arkitekt'
            },
            {
                'sporsmalId': 'utdanning',
                'sporsmal': 'Hva er din høyeste fullførte utdanning?',
                'svar': 'Høyere utdanning (5 år eller mer)'
            },
            {
                'sporsmalId': 'utdanningBestatt',
                'sporsmal': 'Er utdanningen din bestått?',
                'svar': 'Nei'
            },
            {
                'sporsmalId': 'utdanningGodkjent',
                'sporsmal': 'Er utdanningen din godkjent i Norge?',
                'svar': 'Ja'
            },
            {
                'sporsmalId': 'dinSituasjon',
                'sporsmal': 'Velg den situasjonen som passer deg best',
                'svar': 'Har mistet eller kommer til å miste jobben'
            },
            {
                'sporsmalId': 'helseHinder',
                'sporsmal': 'Har du helseproblemer som hindrer deg i å søke eller være i jobb?',
                'svar': 'Ja'
            },
            {
                'sporsmalId': 'andreForhold',
                'sporsmal': 'Har du andre problemer med å søke eller være i jobb?',
                'svar': 'Nei'
            }
        ],
        'sisteStilling': {
            'label': 'Arkitekt',
            'konseptId': 19623,
            'styrk08': '2161'
        },
        'profilering': {
            'jobbetSammenhengendeSeksAvTolvSisteManeder': true,
            'alder': 35,
            'innsatsgruppe': 'BEHOV_FOR_ARBEIDSEVNEVURDERING'
        }
    }
};

const OrdinaerMistetJobbenIngenUtdanning = {
    'type': 'ORDINAER',
    'registrering': {
        'manueltRegistrertAv': {
            'ident': 'Z990960',
            'enhet': {
                'id': '0118',
                'navn': 'NAV Aremark'
            }
        },
        'id': 1282,
        'opprettetDato': '2019-03-27T08:54:52.485711+01:00',
        'besvarelse': {
            'utdanning': 'INGEN_UTDANNING',
            'utdanningBestatt': 'INGEN_SVAR',
            'utdanningGodkjent': 'INGEN_SVAR',
            'helseHinder': 'NEI',
            'andreForhold': 'NEI',
            'sisteStilling': 'INGEN_SVAR',
            'dinSituasjon': 'MISTET_JOBBEN',
            'fremtidigSituasjon': null,
            'tilbakeIArbeid': null
        },
        'teksterForBesvarelse': [
            {
                'sporsmalId': 'sisteStilling',
                'sporsmal': 'Hva er din siste jobb?',
                'svar': 'Barne- og ungdomsarbeider i skolefritidsordning'
            },
            {
                'sporsmalId': 'utdanning',
                'sporsmal': 'Hva er din høyeste fullførte utdanning?',
                'svar': 'Ingen utdanning'
            },
            {
                'sporsmalId': 'utdanningBestatt',
                'sporsmal': 'Er utdanningen din bestått?',
                'svar': 'Ikke aktuelt'
            },
            {
                'sporsmalId': 'utdanningGodkjent',
                'sporsmal': 'Er utdanningen din godkjent i Norge?',
                'svar': 'Ikke aktuelt'
            },
            {
                'sporsmalId': 'dinSituasjon',
                'sporsmal': 'Velg den situasjonen som passer deg best',
                'svar': 'Har mistet eller kommer til å miste jobben'
            },
            {
                'sporsmalId': 'helseHinder',
                'sporsmal': 'Har du helseproblemer som hindrer deg i å søke eller være i jobb?',
                'svar': 'Nei'
            },
            {
                'sporsmalId': 'andreForhold',
                'sporsmal': 'Har du andre problemer med å søke eller være i jobb?',
                'svar': 'Nei'
            }
        ],
        'sisteStilling': {
            'label': 'Barne- og ungdomsarbeider i skolefritidsordning',
            'konseptId': 53619,
            'styrk08': '5311'
        },
        'profilering': {
            'jobbetSammenhengendeSeksAvTolvSisteManeder': false,
            'alder': 50,
            'innsatsgruppe': 'SITUASJONSBESTEMT_INNSATS'
        }
    }
};

const OrdinaerHarJobbOnskerFortsette = {
    'type': 'ORDINAER',
    'registrering': {
        'manueltRegistrertAv': null,
        'id': 1295,
        'opprettetDato': '2019-03-28T16:30:56.161891+01:00',
        'besvarelse': {
            'utdanning': 'INGEN_SVAR',
            'utdanningBestatt': 'INGEN_SVAR',
            'utdanningGodkjent': 'INGEN_SVAR',
            'helseHinder': 'NEI',
            'andreForhold': 'NEI',
            'sisteStilling': 'INGEN_SVAR',
            'dinSituasjon': 'VIL_FORTSETTE_I_JOBB',
            'fremtidigSituasjon': null,
            'tilbakeIArbeid': null
        },
        'teksterForBesvarelse': [
            {
                'sporsmalId': 'sisteStilling',
                'sporsmal': 'Hva er din siste jobb?',
                'svar': 'Tekstforfatter'
            },
            {
                'sporsmalId': 'utdanning',
                'sporsmal': 'Hva er din høyeste fullførte utdanning?',
                'svar': 'Ikke aktuelt'
            },
            {
                'sporsmalId': 'utdanningBestatt',
                'sporsmal': 'Er utdanningen din bestått?',
                'svar': 'Ikke aktuelt'
            },
            {
                'sporsmalId': 'utdanningGodkjent',
                'sporsmal': 'Er utdanningen din godkjent i Norge?',
                'svar': 'Ikke aktuelt'
            },
            {
                'sporsmalId': 'dinSituasjon',
                'sporsmal': 'Velg den situasjonen som passer deg best',
                'svar': 'Har jobb og ønsker å fortsette i den jobben jeg er i'
            },
            {
                'sporsmalId': 'helseHinder',
                'sporsmal': 'Har du helseproblemer som hindrer deg i å søke eller være i jobb?',
                'svar': 'Nei'
            },
            {
                'sporsmalId': 'andreForhold',
                'sporsmal': 'Har du andre problemer med å søke eller være i jobb?',
                'svar': 'Nei'
            }
        ],
        'sisteStilling': {
            'label': 'Tekstforfatter',
            'konseptId': 19945,
            'styrk08': '2641'
        },
        'profilering': {
            'jobbetSammenhengendeSeksAvTolvSisteManeder': false,
            'alder': 30,
            'innsatsgruppe': 'SITUASJONSBESTEMT_INNSATS'
        }
    }
};

/*
*****************
* Sykemeldt
*****************
*/

const SykmeldtSammeArbeidsgiverFullStilling = {
    'type': 'SYKMELDT',
    'registrering': {
        'manueltRegistrertAv': null,
        'id': 92,
        'opprettetDato': '2018-12-07T10:12:37.510892+01:00',
        'besvarelse': {
            'utdanning': null,
            'utdanningBestatt': null,
            'utdanningGodkjent': null,
            'helseHinder': null,
            'andreForhold': null,
            'sisteStilling': null,
            'dinSituasjon': null,
            'fremtidigSituasjon': 'SAMME_ARBEIDSGIVER',
            'tilbakeIArbeid': 'JA_FULL_STILLING'
        },
        'teksterForBesvarelse': [
            {
                'sporsmalId': 'hovedmal',
                'sporsmal': 'Hva tenker du om din fremtidige situasjon?',
                'svar': 'Jeg skal tilbake til jobben jeg har'
            },
            {
                'sporsmalId': 'tilbakeIArbeid',
                'sporsmal': 'Tror du at du kommer tilbake i jobb før du har vært sykmeldt i 52 uker?',
                'svar': 'Ja, i full stilling'
            }
        ]
    }
};

const SykmeldtNyArbeidsgiverIngenUtdanning = {
    'type': 'SYKMELDT',
    'registrering': {
        'manueltRegistrertAv': null,
        'id': 204,
        'opprettetDato': '2019-01-22T13:00:40.151411+01:00',
        'besvarelse': {
            'utdanning': 'INGEN_UTDANNING',
            'utdanningBestatt': 'INGEN_SVAR',
            'utdanningGodkjent': 'INGEN_SVAR',
            'helseHinder': null,
            'andreForhold': 'NEI',
            'sisteStilling': null,
            'dinSituasjon': null,
            'fremtidigSituasjon': 'NY_ARBEIDSGIVER',
            'tilbakeIArbeid': null
        },
        'teksterForBesvarelse': [
            {
                'sporsmalId': 'hovedmal',
                'sporsmal': 'Hva tenker du om din fremtidige situasjon?',
                'svar': 'Jeg trenger ny jobb'
            },
            {
                'sporsmalId': 'utdanningBestatt',
                'sporsmal': 'Er utdanningen din bestått?',
                'svar': 'Ikke aktuelt'
            },
            {
                'sporsmalId': 'utdanningGodkjent',
                'sporsmal': 'Er utdanningen din godkjent i Norge?',
                'svar': 'Ikke aktuelt'
            },
            {
                'sporsmalId': 'utdanning',
                'sporsmal': 'Hva er din høyeste fullførte utdanning?',
                'svar': 'Ingen utdanning'
            },
            {
                'sporsmalId': 'andreForhold',
                'sporsmal': 'Er det noe annet enn helsen din som NAV bør ta hensyn til?',
                'svar': 'Nei'
            }
        ]
    }
};

const SykmeldtUsikker = {
    'type': 'SYKMELDT',
    'registrering': {
        'manueltRegistrertAv': null,
        'id': 262,
        'opprettetDato': '2019-03-25T13:35:42.341968+01:00',
        'besvarelse': {
            'utdanning': 'INGEN_UTDANNING',
            'utdanningBestatt': 'INGEN_SVAR',
            'utdanningGodkjent': 'INGEN_SVAR',
            'helseHinder': null,
            'andreForhold': 'NEI',
            'sisteStilling': null,
            'dinSituasjon': null,
            'fremtidigSituasjon': 'USIKKER',
            'tilbakeIArbeid': null
        },
        'teksterForBesvarelse': [
            {
                'sporsmalId': 'hovedmal',
                'sporsmal': 'Hva tenker du om din fremtidige situasjon?',
                'svar': 'Jeg er usikker'
            },
            {
                'sporsmalId': 'utdanningBestatt',
                'sporsmal': 'Er utdanningen din bestått?',
                'svar': 'Ikke aktuelt'
            },
            {
                'sporsmalId': 'utdanningGodkjent',
                'sporsmal': 'Er utdanningen din godkjent i Norge?',
                'svar': 'Ikke aktuelt'
            },
            {
                'sporsmalId': 'utdanning',
                'sporsmal': 'Hva er din høyeste fullførte utdanning?',
                'svar': 'Ingen utdanning'
            },
            {
                'sporsmalId': 'andreForhold',
                'sporsmal': 'Er det noe annet enn helsen din som NAV bør ta hensyn til?',
                'svar': 'Nei'
            }
        ]
    }
};

const SykmeldtIngenPasser = {
    'type': 'SYKMELDT',
    'registrering': {
        'manueltRegistrertAv': null,
        'id': 105,
        'opprettetDato': '2018-12-10T20:54:29.394719+01:00',
        'besvarelse': {
            'utdanning': null,
            'utdanningBestatt': null,
            'utdanningGodkjent': null,
            'helseHinder': null,
            'andreForhold': null,
            'sisteStilling': null,
            'dinSituasjon': null,
            'fremtidigSituasjon': 'INGEN_PASSER',
            'tilbakeIArbeid': null
        },
        'teksterForBesvarelse': [
            {
                'sporsmalId': 'hovedmal',
                'sporsmal': 'Hva tenker du om din fremtidige situasjon?',
                'svar': 'Ingen av disse alternativene passer'
            }
        ]
    }
};

const registrering = new URL(window.location.href).searchParams.get('registrering');
let Registrering: RegistreringDataType & JSONObject = SykmeldtSammeArbeidsgiverFullStilling;
switch (registrering) {
    case 'SykmeldtSammeArbeidsgiverFullStilling':
        Registrering = SykmeldtSammeArbeidsgiverFullStilling;
        break;
    case 'SykmeldtNyArbeidsgiverIngenUtdanning':
        Registrering = SykmeldtNyArbeidsgiverIngenUtdanning;
        break;
    case 'SykmeldtIngenPasser':
        Registrering = SykmeldtIngenPasser;
        break;
    case 'SykmeldtUsikker':
        Registrering = SykmeldtUsikker;
        break;
    case 'OrdinaerHarJobbOnskerFortsette':
        Registrering = OrdinaerHarJobbOnskerFortsette;
        break;
    case 'OrdinaerMistetJobbenIngenUtdanning':
        Registrering = OrdinaerMistetJobbenIngenUtdanning;
        break;
    case 'OrdinaerHarMistetJobben':
        Registrering = OrdinaerHarMistetJobben;
        break;
    default:
}

export default Registrering;
