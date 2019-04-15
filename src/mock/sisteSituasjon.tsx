import { format } from 'date-fns';

export const fremtidigSituasjon = {
    fremtidigSituasjon: 'NY_ARBEIDSGIVER',
    endretAv: 'BRUKER',
    dato: '2019-04-02T16:17:14.017+01:00',
};

const tomSituasjon = [
    {
        fremtidigSituasjon: '',
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

export function opprettSituasjon(situasjon: string) {
    let nySituasjon = {
        fremtidigSituasjon: situasjon,
        endretAv: 'BRUKER',
        dato: format(new Date()),
    };
    situasjoner.push(nySituasjon);
    return nySituasjon;
}
