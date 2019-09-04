import { MalType } from '../../components/mal/del-mal/DelMal';
import { JSONObject } from 'yet-another-fetch-mock/dist/types/types';

export const malData: MalType & JSONObject = {
	mal: 'hei på deg',
	endretAv: 'BRUKER',
	dato: '2019-04-10T06:19:30.284'
};

const tomMal = [
	{
		mal: null,
		endretAv: '',
		dato: null
	}
];

export const maler: Array<MalType & JSONObject> = [malData].concat(tomMal);

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
	const nyMal = {
		mal,
		endretAv: 'BRUKER',
		dato: new Date().toISOString()
	};
	maler.push(nyMal);
	return nyMal;
}
