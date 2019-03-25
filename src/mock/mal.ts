import { MalType } from '../components/mal/DelMal';
import { JSONObject } from 'yet-another-fetch-mock/dist/types/types';

export const Mal: MalType & JSONObject = {
    mal: null,
    endretAv: 'BRUKER',
    dato: null,
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
