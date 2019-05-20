import { fetchData } from '../utils/fetchData';
import { RegistreringDataType } from '../datatyper/registreringData';
import { MalType } from '../components/mal/DelMal/DelMal';
import { HistorikkType, HovedmalType } from '../datatyper/hovedmalType';
import { HovedmalAlternativ } from '../components/registreringsinfo/Alternativer';
import { HensynType } from '../components/hensyn/hensyn';
import { SisteSituasjon } from '../datatyper/situasjon';

export const API_VEILARBREGISTRERING = '/veilarbregistrering/api/registrering';
export const API_VEILARBVEDTAKINFO = '/veilarbvedtakinfo/api';
export const API_VEILARBVEDTAKINFO_HOVEDMAL = `${API_VEILARBVEDTAKINFO}/fremtidigsituasjon`;

export const API_VEILARBOPPFOLGING = '/veilarboppfolging/api/oppfolging';

export interface OppfolgingStatusType {
    underOppfolging: boolean;
}

function getCookie(name: string) {
    const re = new RegExp(`${name}=([^;]+)`);
    const match = re.exec(document.cookie);
    return match !== null ? match[1] : '';
}

function getHeaders() {
    return new Headers({
        'Content-Type': 'application/json',
        'NAV_CSRF_PROTECTION': getCookie('NAV_CSRF_PROTECTION'), // eslint-disable-line quote-props
    });
}

const CONFIG = {
    credentials: ('same-origin' as RequestCredentials),
    headers: getHeaders(),
};

export function hentRegistreringData(): Promise<RegistreringDataType> {
    return fetchData<RegistreringDataType>(API_VEILARBREGISTRERING, CONFIG)
        .then((registeringsData: RegistreringDataType) => ({
            type: registeringsData.type,
            registrering: registeringsData.registrering
        }));
}

export function hentHovedmal(): Promise<HovedmalType> {
    return fetchData<HovedmalType>(API_VEILARBVEDTAKINFO_HOVEDMAL, CONFIG)
        .then((situasjonData: HovedmalType) => ({
            alternativId: situasjonData.alternativId ?
                situasjonData.alternativId :
                HovedmalAlternativ.IKKE_OPPGITT,
            dato: situasjonData.dato
        }));
}
export function oppdaterHovedmal(alternativId: string, tekst: string): Promise<HovedmalType> {
    return fetchData<HovedmalType>(API_VEILARBVEDTAKINFO_HOVEDMAL, {method: 'post', body: JSON.stringify({alternativId, tekst}), ...CONFIG});
}

export function hentOppfolgingStatus(): Promise<OppfolgingStatusType> {
    return fetchData<OppfolgingStatusType>(API_VEILARBOPPFOLGING, CONFIG)
        .then((oppfolgingStatus: OppfolgingStatusType) => ({underOppfolging: oppfolgingStatus.underOppfolging}));
}

export function hentMal(): Promise<MalType> {
    return fetchData<MalType>(`${API_VEILARBOPPFOLGING}/mal`, CONFIG);
}

export function hentMalList(): Promise<Array<MalType&HistorikkType>> {
    return fetchData<Array<MalType&HistorikkType>>(`${API_VEILARBOPPFOLGING}/malListe`, CONFIG);
}

export function hentFremtidigSituasjonList(): Promise<Array<HovedmalType&HistorikkType>> {
    return fetchData<Array<HovedmalType&HistorikkType>>(`${API_VEILARBVEDTAKINFO}/situasjonliste`, CONFIG);
}

export function oppdaterMal(mal: string): Promise<MalType> {
    return fetchData<MalType>(`${API_VEILARBOPPFOLGING}/mal`, {method: 'post', body: JSON.stringify({mal}), ...CONFIG});
}

export function oppdaterHelseHinder(hinder: boolean): Promise<HensynType> {
    return fetchData<HensynType>(`${API_VEILARBVEDTAKINFO}/helsehinder`, {method: 'post', body: JSON.stringify({verdi: hinder}), ...CONFIG});
}

export function oppdaterAndreHinder(hinder: boolean): Promise<HensynType> {
    return fetchData<HensynType>(`${API_VEILARBVEDTAKINFO}/andrehinder`, {method: 'post', body: JSON.stringify({verdi: hinder}), ...CONFIG});
}

export function hentSituasjon() {
    return fetchData<SisteSituasjon>(`${API_VEILARBVEDTAKINFO}/sistesituasjon`, CONFIG);
}
