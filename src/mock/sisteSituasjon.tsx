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

export function opprettSituasjon(body: {alternativId: string}) {
    let nySituasjon = {
        alternativId: body.alternativId,
        endretAv: 'BRUKER',
        dato: format(new Date()),
    };
    situasjoner.push(nySituasjon);
    return nySituasjon;
}
