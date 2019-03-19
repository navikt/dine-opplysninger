import FetchMock, { Middleware, MiddlewareUtils } from 'yet-another-fetch-mock';
import OppfolgingStatus from './oppfolging';
import Registrering from './registrering';
import { Mal, opprettMal } from './mal';

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
mock.get('/veilarboppfolging/api/oppfolging', OppfolgingStatus );
mock.get('/veilarboppfolging/api/oppfolging/mal', Mal);

// tslint:disable-next-line
mock.post('/veilarboppfolging/api/oppfolging/mal', ({ body }): any => {
    return opprettMal(body.mal);
});

export default mock;
