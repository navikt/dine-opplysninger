export const Mal = {
    mal: 'Beskriv gjerne både kortsiktig og langsiktig mål og hva slags arbeidssoppgaver du ønsker deg,\n' +
    'slik veilederen din kan gi deg best mulig oppfølging',
    endretAv: 'BRUKER',
    dato: '2019-12-12',
};

export const maler = [
    Mal,
];

export function sisteMal() {
    if (maler.length === 0) {
        return maler;
    }
    return maler[maler.length - 1];
}

export function opprettMal(mal: string) {
    let nyMal = {
        mal,
        endretAv: 'BRUKER',
        dato: '2019-12-12',
    };
    maler.push(nyMal);
    return nyMal;
}
