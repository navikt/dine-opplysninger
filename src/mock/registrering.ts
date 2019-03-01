const Registrering = {
    'type': 'ORDINAER',
    'registrering': {
        'id': 1187,
        'opprettetDato': '2018-12-14T14:32:23.468221+01:00',
        'besvarelse': {
            andreForhold: 'NEI',
            dinSituasjon: 'AKKURAT_FULLFORT_UTDANNING',
            fremtidigSituasjon: null,
            helseHinder: 'NEI',
            sisteStilling: 'HAR_HATT_JOBB',
            tilbakeIArbeid: null,
            utdanning: 'HOYERE_UTDANNING_1_TIL_4',
            utdanningBestatt: 'NEI',
            utdanningGodkjent: 'VET_IKKE'
        },
        'teksterForBesvarelse': [
            {'sporsmalId': 'sisteStilling', 'sporsmal': 'Hva er din siste jobb?', 'svar': 'Ingen yrkeserfaring'}, {
                'sporsmalId': 'utdanning',
                'sporsmal': 'Hva er din høyeste fullførte utdanning?',
                'svar': 'Høyere utdanning (1 til 4 år)'
            }, {'sporsmalId': 'utdanningBestatt', 'sporsmal': 'Er utdanningen din bestått?', 'svar': 'Nei'}, {
                'sporsmalId': 'utdanningGodkjent',
                'sporsmal': 'Er utdanningen din godkjent i Norge?',
                'svar': 'Nei'
            }, {'sporsmalId': 'dinSituasjon', 'sporsmal': 'Velg den situasjonen som passer deg best', 'svar': 'Har aldri vært i jobb'}, {
                'sporsmalId': 'helseHinder',
                'sporsmal': 'Har du helseproblemer som hindrer deg i å søke eller være i jobb?',
                'svar': 'Nei'
            }, {'sporsmalId': 'andreForhold', 'sporsmal': 'Har du andre problemer med å søke eller være i jobb?', 'svar': 'Nei'}
            ],
        'sisteStilling': {
            'label': 'Annen stilling',
            'konseptId': -1,
            'styrk08': '-1'
        },
        'profilering': {
            'jobbetSammenhengendeSeksAvTolvSisteManeder': false,
            'alder': 38,
            'innsatsgruppe': 'SITUASJONSBESTEMT_INNSATS'
        }
    }
};

export default Registrering;
