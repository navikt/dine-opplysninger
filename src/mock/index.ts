import FetchMock, { Middleware, MiddlewareUtils } from 'yet-another-fetch-mock';
import OppfolgingStatus from './oppfolging';
import Registrering from './registrering';
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

mock.get('/veilarbregistrering/api/registrering', Registrering );

mock.get(`${API_VEILARBREGISTRERING_SISTE_SITUASJON}/fremtidigsituasjonListe`, () => situasjonListe());
mock.get(API_VEILARBREGISTRERING_FREMTIDIG_SITUASJON, fremtidigSituasjon);
mock.post(API_VEILARBREGISTRERING_FREMTIDIG_SITUASJON, ({ body }): any => {
    return opprettSituasjon(body);
});

mock.get('/veilarboppfolging/api/oppfolging/malListe', () => malListe());
mock.get('/veilarboppfolging/api/oppfolging', OppfolgingStatus );
mock.get('/veilarboppfolging/api/oppfolging/mal', Mal);

// tslint:disable-next-line
mock.post('/veilarboppfolging/api/oppfolging/mal', ({ body }): any => {
    return opprettMal(body.mal);
});

export default mock;
