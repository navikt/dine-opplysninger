import { format } from 'date-fns';

export const fremtidigSituasjon = {
    fremtidigSituasjon: 'NY_ARBEIDSGIVER',
    endretAv: 'BRUKER',
    dato: '2019-04-02T16:17:14.017+01:00',
};

const flerSituasjon = [
    {'fremtidigSituasjon': 'INGEN_PASSER', 'endretAv': 'BRUKER', 'dato': '2019-04-02T10:55:14.017'},
    {'fremtidigSituasjon': 'NY_ARBEIDSGIVER', 'endretAv': 'BRUKER', 'dato': '2019-04-02T09:17:14.017'},
];

export const situasjoner = [
    fremtidigSituasjon
].concat(flerSituasjon);

export function situasjonListe() {
    return situasjoner;
}

export function opprettSituasjon(situasjon: string) {
    let nySituasjon = {
        fremtidigSituasjon: situasjon,
        endretAv: 'BRUKER',
        dato: format(new Date(), 'YYYY-MM-DD HH:mm:ss'),
    };
    situasjoner.push(nySituasjon);
    return nySituasjon;
}
