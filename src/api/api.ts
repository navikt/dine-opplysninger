import { fetchData } from '../utils/fetchData';
import { RegistreringDataType } from '../datatyper/registreringData';
import { MalType } from '../components/mal/DelMal';
import { FremtidigSituasjonType } from '../datatyper/fremtidigSituasjonType';
import { SituasjonAlternativ } from '../components/registreringsinfo/Alternativer';

export const API_VEILARBREGISTRERING = '/veilarbregistrering/api/registrering';
export const API_VEILARBREGISTRERING_FREMTIDIG_SITUASJON = '/veilarbregistrering/api/sisteSituasjon/fremtidigSituasjon';

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

export function hentFremtidigSituasjon(): Promise<FremtidigSituasjonType> {
    return fetchData<FremtidigSituasjonType>(API_VEILARBREGISTRERING_FREMTIDIG_SITUASJON, CONFIG)
        .then((situasjonData: FremtidigSituasjonType) => ({
            fremtidigSituasjon: situasjonData.fremtidigSituasjon ?
                situasjonData.fremtidigSituasjon :
                SituasjonAlternativ.IKKE_OPPGITT,
        }));
}
export function oppdaterFremtidigSituasjon(fremtidigSituasjon: string): Promise<FremtidigSituasjonType> {
    return fetchData<FremtidigSituasjonType>(`${API_VEILARBREGISTRERING_FREMTIDIG_SITUASJON}`, {method: 'post', body: JSON.stringify(fremtidigSituasjon), ...CONFIG});
}

export function hentOppfolgingStatus(): Promise<OppfolgingStatusType> {
    return fetchData<OppfolgingStatusType>(API_VEILARBOPPFOLGING, CONFIG)
        .then((oppfolgingStatus: OppfolgingStatusType) => ({underOppfolging: oppfolgingStatus.underOppfolging}));
}

export function hentMal(): Promise<MalType> {
    return fetchData<MalType>(`${API_VEILARBOPPFOLGING}/mal`, CONFIG);
}

export function oppdaterMal(mal: string): Promise<MalType> {
    return fetchData<MalType>(`${API_VEILARBOPPFOLGING}/mal`, {method: 'post', body: JSON.stringify({mal}), ...CONFIG});
}
