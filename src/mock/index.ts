import FetchMock, {
    Middleware,
    MiddlewareUtils,
    ResponseData,
    ResponseUtils
} from 'yet-another-fetch-mock';
import OppfolgingStatus from './oppfolging';
import Registrering from './registrering';
import { Mal, malListe, opprettMal } from './mal';
import { fremtidigSituasjon, opprettSituasjon, situasjonListe } from './sisteSituasjon';
import { API_VEILARBVEDTAKINFO_HOVEDMAL, API_VEILARBVEDTAKINFO } from '../api/api';
import { oppdaterHensyn } from './hensyn';

const loggingMiddleware: Middleware = (request, response) => {
    // tslint:disable
    console.groupCollapsed(request.url);
    console.groupCollapsed('config');
    console.log('url', request.url);
    console.log('queryParams', request.queryParams);
    console.log('pathParams', request.pathParams);
    console.log('body', request.body);
    console.groupEnd();

    try {
        console.log('response', JSON.parse(response.body));
    } catch (e) {
        console.log('response', response);
    }

    console.groupEnd();
    // tslint:enable
    return response;
};

const mock = FetchMock.configure({
    enableFallback: true,
    middleware: MiddlewareUtils.combine(
        MiddlewareUtils.delayMiddleware(0),
        loggingMiddleware
    )
});
const DELAY = 500;
mock.get('/veilarbregistrering/api/registrering', Registrering );
// Mock med 204 respons
// mock.get('/veilarbregistrering/api/registrering', ResponseUtils.statusCode(204));

mock.get(`${API_VEILARBVEDTAKINFO}/situasjonliste`, ResponseUtils.delayed(DELAY, situasjonListe()));
mock.get(API_VEILARBVEDTAKINFO_HOVEDMAL, ResponseUtils.delayed(DELAY, fremtidigSituasjon));

mock.post(API_VEILARBVEDTAKINFO_HOVEDMAL, ResponseUtils.delayed(DELAY, ({ body }): Promise<ResponseData> => {
    return ResponseUtils.jsonPromise(opprettSituasjon(body));
}));

mock.get('/veilarbvedtakinfo/api/sistesituasjon', {});

mock.get('/veilarboppfolging/api/oppfolging', OppfolgingStatus );

mock.get('/veilarboppfolging/api/oppfolging/malListe', ResponseUtils.delayed(DELAY + 1000, malListe()));
mock.get('/veilarboppfolging/api/oppfolging/mal',  ResponseUtils.delayed(DELAY, Mal));
// tslint:disable-next-line
mock.post('/veilarboppfolging/api/oppfolging/mal', ResponseUtils.delayed(DELAY, ({ body }): Promise<ResponseData> => {
    return ResponseUtils.jsonPromise(opprettMal(body.mal));
}));

mock.post('/veilarbvedtakinfo/api/andrehinder', ResponseUtils.delayed(DELAY, ({ body }): Promise<ResponseData>  => {
    return ResponseUtils.jsonPromise(oppdaterHensyn(body.verdi));
}));

mock.post('/veilarbvedtakinfo/api/helsehinder', ResponseUtils.delayed(DELAY, ({ body }): Promise<ResponseData>  => {
    return ResponseUtils.jsonPromise(oppdaterHensyn(body.verdi));
}));

export default mock;
