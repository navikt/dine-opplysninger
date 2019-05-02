import FetchMock, { Middleware, MiddlewareUtils, ResponseUtils } from 'yet-another-fetch-mock';
import OppfolgingStatus from './oppfolging';
// import Registrering from './registrering';
import { Mal, malListe, opprettMal } from './mal';
import { fremtidigSituasjon, opprettSituasjon, situasjonListe } from './sisteSituasjon';
import { API_VEILARBREGISTRERING_FREMTIDIG_SITUASJON, API_VEILARBREGISTRERING_SISTE_SITUASJON } from '../api/api';

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
// mock.get('/veilarbregistrering/api/registrering', Registrering );
// Mock med 204 respons
mock.get('/veilarbregistrering/api/registrering', ResponseUtils.statusCode(204));

mock.get(`${API_VEILARBREGISTRERING_SISTE_SITUASJON}/fremtidigsituasjonListe`, ResponseUtils.delayed(DELAY, situasjonListe()));
mock.get(API_VEILARBREGISTRERING_FREMTIDIG_SITUASJON, ResponseUtils.delayed(DELAY, fremtidigSituasjon));

mock.post(API_VEILARBREGISTRERING_FREMTIDIG_SITUASJON, ResponseUtils.delayed(DELAY, ({ body }): any => {
    return ResponseUtils.jsonPromise(opprettSituasjon(body));
}));

mock.get('/veilarboppfolging/api/oppfolging', OppfolgingStatus );

mock.get('/veilarboppfolging/api/oppfolging/malListe', ResponseUtils.delayed(DELAY + 1000, malListe()));
mock.get('/veilarboppfolging/api/oppfolging/mal',  ResponseUtils.delayed(DELAY, Mal));
// tslint:disable-next-line
mock.post('/veilarboppfolging/api/oppfolging/mal', ResponseUtils.delayed(DELAY, ({ body }): any => {
    return ResponseUtils.jsonPromise(opprettMal(body.mal));
}));

export default mock;
