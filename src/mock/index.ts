import FetchMock, { MiddlewareUtils, ResponseData, ResponseUtils } from 'yet-another-fetch-mock';
import OppfolgingStatus from './oppfolging';
import registreringData from './registrering';
import { malData, malListe, opprettMal } from './mal';
import { fremtidigSituasjon, opprettSituasjon, sisteSituasjon, situasjonListe } from './sisteSituasjon';
import {
API_VEILARBVEDTAKINFO_HOVEDMAL,
API_VEILARBVEDTAKINFO,
API_VEILARBREGISTRERING,
API_VEILARBOPPFOLGING
} from '../api/api';
import { oppdaterHensyn } from './hensyn';

const mock = FetchMock.configure({
    enableFallback: true,
    middleware: MiddlewareUtils.combine(MiddlewareUtils.delayMiddleware(500), MiddlewareUtils.loggingMiddleware())
});

mock.get(API_VEILARBREGISTRERING, registreringData);
mock.get(`${API_VEILARBVEDTAKINFO}/situasjonliste`, situasjonListe());
mock.get(API_VEILARBVEDTAKINFO_HOVEDMAL, fremtidigSituasjon);
mock.get(`${API_VEILARBVEDTAKINFO}/sistesituasjon`, sisteSituasjon());
mock.get(API_VEILARBOPPFOLGING, OppfolgingStatus );
mock.get(`${API_VEILARBOPPFOLGING}/malListe`, malListe());
mock.get(`${API_VEILARBOPPFOLGING}/mal`, malData);

mock.post(API_VEILARBVEDTAKINFO_HOVEDMAL, ({ body }): Promise<ResponseData> => {
    return ResponseUtils.jsonPromise(opprettSituasjon(body));
});

mock.post(`${API_VEILARBOPPFOLGING}/mal`, ({ body }): Promise<ResponseData> => {
    return ResponseUtils.jsonPromise(opprettMal(body.mal));
});

mock.post(`${API_VEILARBVEDTAKINFO}/andrehinder`, ({ body }): Promise<ResponseData>  => {
    return ResponseUtils.jsonPromise(oppdaterHensyn(body.verdi));
});

mock.post(`${API_VEILARBVEDTAKINFO}/helsehinder`, ({ body }): Promise<ResponseData>  => {
    return ResponseUtils.jsonPromise(oppdaterHensyn(body.verdi));
});

export default mock;
