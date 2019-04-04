import { MalType } from '../components/mal/DelMal';
import { JSONObject } from 'yet-another-fetch-mock/dist/types/types';
import { format } from 'date-fns';

export const Mal: MalType & JSONObject = {
    mal: null,
    endretAv: '',
    dato: null,
};

const flereMal = [
    {'mal': 'Forklaring og delmål ble satt 2.april 2019', 'endretAv': 'VEILEDER', 'dato': '2019-04-02T10:59:30.284'},
    {'mal': 'Først forklaring og delmål ble satt 1.april 2019', 'endretAv': 'BRUKER', 'dato': '2019-04-01T06:19:30.284'},
];

export const maler: Array<MalType&JSONObject> = [
    Mal
].concat(flereMal);

export function malListe() {
    return maler;
}

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
        dato: format(new Date(), 'YYYY-MM-DD HH:mm:ss'),
    };
    maler.push(nyMal);
    return nyMal;
}
