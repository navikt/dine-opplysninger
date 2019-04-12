/*tslint:disable*/
import { kombinerHistorikk } from './hjelpefunksjoner';
import { HistorikkType } from '../../../datatyper/fremtidigSituasjonType';

describe('utils test', () => {
    it('kombiner rikig historikk', () => {
        const kombinertHistorikk = kombinerHistorikk(historikk);
        expect(kombinertHistorikk).toEqual(forventetKombinertHistorikk)
    });
});

const historikk: HistorikkType[] = [{'mal': null, 'endretAv': '', 'dato': null}, {
    'fremtidigSituasjon': 'NY_ARBEIDSGIVER',
    'endretAv': 'BRUKER',
    'dato': '2019-04-02T16:17:14.017+01:00'
}, {'mal': 'Forklaring og delmål ble satt 2.april 2019', 'endretAv': 'VEILEDER', 'dato': '2019-04-02T10:59:30.284'}, {
    'fremtidigSituasjon': 'INGEN_PASSER',
    'endretAv': 'BRUKER',
    'dato': '2019-04-02T10:55:14.017'
}, {'fremtidigSituasjon': 'NY_ARBEIDSGIVER', 'endretAv': 'BRUKER', 'dato': '2019-04-02T09:17:14.017'}, {
    'mal': 'Først forklaring og delmål ble satt 1.april 2019',
    'endretAv': 'BRUKER',
    'dato': '2019-04-01T06:19:30.284'
}];

const forventetKombinertHistorikk = [{
    'mal': 'Forklaring og delmål ble satt 2.april 2019',
    'fremtidigSituasjon': 'NY_ARBEIDSGIVER',
    'endretAv': 'BRUKER',
    'dato': '2019-04-02T16:17:14.017+01:00'
}, {
    'mal': 'Forklaring og delmål ble satt 2.april 2019',
    'fremtidigSituasjon': 'INGEN_PASSER',
    'endretAv': 'VEILEDER',
    'dato': '2019-04-02T10:59:30.284'
}, {
    'mal': 'Først forklaring og delmål ble satt 1.april 2019',
    'fremtidigSituasjon': 'INGEN_PASSER',
    'endretAv': 'BRUKER',
    'dato': '2019-04-02T10:55:14.017'
}, {
    'mal': 'Først forklaring og delmål ble satt 1.april 2019',
    'fremtidigSituasjon': 'NY_ARBEIDSGIVER',
    'endretAv': 'BRUKER',
    'dato': '2019-04-02T09:17:14.017'
}, {'mal': 'Først forklaring og delmål ble satt 1.april 2019', 'fremtidigSituasjon': '', 'endretAv': 'BRUKER', 'dato': '2019-04-01T06:19:30.284'}];

