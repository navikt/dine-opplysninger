/*tslint:disable*/
import { kombinerHistorikk } from './hjelpefunksjoner';
import { HistorikkType } from '../../../datatyper/hovedmalType';

describe('utils test', () => {
    it('kombiner rikig historikk', () => {
        const kombinertHistorikk = kombinerHistorikk(historikk);
        expect(kombinertHistorikk).toEqual(forventetKombinertHistorikk);
    });
});

const historikk: HistorikkType[] =
    [{'mal': 'hei på deg', 'endretAv': 'BRUKER', 'dato': '2019-04-10T06:19:30.284'}, {'mal': null, 'endretAv': '', 'dato': null}, {
        'alternativId': 'NY_ARBEIDSGIVER',
        'endretAv': 'BRUKER',
        'dato': '2019-04-02T16:17:14.017+01:00',
        'tekst': 'Jeg skal tilbake til ny jobb'
    }, {'alternativId': '', 'endretAv': '', 'dato': '', 'tekst': ''}];

const forventetKombinertHistorikk = [{'mal': 'hei på deg', 'tekst': 'Jeg skal tilbake til ny jobb', 'endretAv': 'BRUKER', 'dato': '2019-04-10T06:19:30.284'}, {
    'mal': '',
    'tekst': 'Jeg skal tilbake til ny jobb',
    'endretAv': 'BRUKER',
    'dato': '2019-04-02T16:17:14.017+01:00'
}];

