import { fetchData } from '../utils/fetchData';
import SisteStillingType, { RegistreringDataType } from '../datatyper/sisteStillingFraRegistrering';
export const API_VEILARBREGISTRERING = '/veilarbregistrering/api/registrering';
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

export function hentSisteStilling(errorHandler: (response?: Response) => Promise<SisteStillingType>): Promise<SisteStillingType> {
    return fetchData<RegistreringDataType>(API_VEILARBREGISTRERING, CONFIG)
        .then((registeringsData: RegistreringDataType) => ({sisteStilling: registeringsData.registrering.sisteStilling}))
        .catch(() => ({sisteStilling: {label: 'Kunne ikke hente data', konseptId: 0, styrk08: ''}}));
}

export function hentOppfolgingStatus(): Promise<OppfolgingStatusType> {
    return fetchData<OppfolgingStatusType>(API_VEILARBOPPFOLGING, CONFIG)
        .then((oppfolgingStatus: OppfolgingStatusType) => ({underOppfolging: oppfolgingStatus.underOppfolging}))
        .catch(() => ({underOppfolging: false}));
}