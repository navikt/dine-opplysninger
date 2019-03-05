import FetchMock, { Middleware, MiddlewareUtils } from 'yet-another-fetch-mock';
import {
    OrdinaerHarJobbOnskerFortsette,
    OrdinaerMistetJobbenIngenUtdanning, SykmeldtIngenPasser,
    SykmeldtNyArbeidsgiverHarUtdanning, SykmeldtNyArbeidsgiverIngenUtdanning,
    SykmeldtSammeArbeidsgiverFullStilling
} from './registrering';
import OppfolgingStatus from './oppfolging';

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

const reginfo = new URL(window.location.href).searchParams.get('reginfo');
let Registrering;
switch (reginfo) {
    case 'SykmeldtSammeArbeidsgiverFullStilling':
        Registrering = SykmeldtSammeArbeidsgiverFullStilling;
        break;
    case 'SykmeldtNyArbeidsgiverHarUtdanning':
        Registrering = SykmeldtNyArbeidsgiverHarUtdanning;
        break;
    case 'SykmeldtNyArbeidsgiverIngenUtdanning':
        Registrering = SykmeldtNyArbeidsgiverIngenUtdanning;
        break;
    case 'SykmeldtIngenPasser':
        Registrering = SykmeldtIngenPasser;
        break;
    case 'OrdinaerHarJobbOnskerFortsette':
        Registrering = OrdinaerHarJobbOnskerFortsette;
        break;
    default:
        Registrering = OrdinaerMistetJobbenIngenUtdanning;
}

mock.get('/veilarbregistrering/api/registrering', Registrering );
mock.get('/veilarboppfolging/api/oppfolging', OppfolgingStatus );

export default mock;
