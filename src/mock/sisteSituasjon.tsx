import { format } from 'date-fns';

export const fremtidigSituasjon = {
    alternativId: 'NY_ARBEIDSGIVER',
    endretAv: 'BRUKER',
    dato: '2019-04-02T16:17:14.017+01:00',
};

const tomSituasjon = [
    {
        alternativId: '',
        endretAv: '',
        dato: '',
    }
];

export const situasjoner = [
    fremtidigSituasjon
].concat(tomSituasjon);

export function situasjonListe() {
    return situasjoner;
}

export function opprettSituasjon(body: { alternativId: string }) {
    let nySituasjon = {
        alternativId: body.alternativId,
        endretAv: 'BRUKER',
        dato: format(new Date()),
    };
    situasjoner.push(nySituasjon);
    return nySituasjon;
}

export function sisteSituasjon() {
    return {
        helseHinder: {'dato': '2019-05-21T14:19:25.435+02:00', 'verdi': 'JA'},
        andreHinder: {'dato': '2019-05-21T14:19:25.435+02:00', 'verdi': 'INGEN_SVAR'},
        fremtidigSituasjonData: {
            'dato': '2019-05-21T14:19:25.435+02:00',
            'alternativId': 'NY_ARBEIDSGIVER',
            'tekst': null,
            'endretAv': 'BRUKER'
        }
    };
}