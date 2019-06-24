import FetchMock, {
    Middleware,
    MiddlewareUtils,
    ResponseData,
    ResponseUtils
} from 'yet-another-fetch-mock';
import OppfolgingStatus from './oppfolging';
import Registrering from './registrering';
import { Mal, malListe, opprettMal } from './mal';
import { fremtidigSituasjon, opprettSituasjon, sisteSituasjon, situasjonListe } from './sisteSituasjon';
import { API_VEILARBVEDTAKINFO_HOVEDMAL, API_VEILARBVEDTAKINFO } from '../api/api';
import { oppdaterHensyn } from './hensyn';

const PRINT_FRONTENDLOGGER = true;
const DELAY = 500;

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
    return response;
};

const mock = FetchMock.configure({
    enableFallback: true,
    middleware: MiddlewareUtils.combine(
        MiddlewareUtils.delayMiddleware(0),
        loggingMiddleware
    )
});

if (PRINT_FRONTENDLOGGER) {
    (window as any).frontendlogger = { // tslint:disable-line
        event: (name: string, fields: any, tags: any) => { // tslint:disable-line
            console.log('frontendlogger', {name, fields, tags}); // tslint:disable-line
        }
    };
}

/*
const noContent = ResponseUtils.statusCode(204);
const internalServerError = ResponseUtils.combine(ResponseUtils.statusCode(500), ResponseUtils.json({
    "id": "9170c6534ed5eca272d527cd30c6a458",
    "type": "UKJENT",
    "detaljer": {
        "detaljertType": "javax.ws.rs.InternalServerErrorException",
        "feilMelding": "HTTP 500 Internal Server Error",
        "stackTrace": "javax.ws.rs.InternalServerErrorException: HTTP 500 Internal Server Error\r\n\t"
    }
}));
*/

mock.get('/veilarbregistrering/api/registrering', ResponseUtils.delayed(DELAY, Registrering));
// Mock med 204 respons
// mock.get('/veilarbregistrering/api/registrering', ResponseUtils.statusCode(500));

mock.get(`${API_VEILARBVEDTAKINFO}/situasjonliste`, ResponseUtils.delayed(DELAY, situasjonListe()));
mock.get(API_VEILARBVEDTAKINFO_HOVEDMAL, ResponseUtils.delayed(DELAY, fremtidigSituasjon));

mock.post(API_VEILARBVEDTAKINFO_HOVEDMAL, ResponseUtils.delayed(DELAY, ({ body }): Promise<ResponseData> => {
    return ResponseUtils.jsonPromise(opprettSituasjon(body));
}));

mock.get('/veilarbvedtakinfo/api/sistesituasjon', ResponseUtils.delayed(DELAY, sisteSituasjon()));

mock.get('/veilarboppfolging/api/oppfolging', OppfolgingStatus );
// mock.get('/veilarboppfolging/api/oppfolging', ResponseUtils.statusCode(500) );

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
