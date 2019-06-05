import {frontendLogger} from "./frontendlogger";

export const loggTidBruktFraRegistreringTilForsteEndring = (function () {
        let called = false;
        return function (registrering) {
            if(!called) {
                called = true;
                const tidBruktIDager = Math.ceil(
                    Math.abs(new Date(registrering.registrering.opprettetDato).getTime() - new Date().getTime()) / (1000 * 3600 * 24)
                );
                frontendLogger('infoommeg.tidBruktFraRegistreringTilEndring', undefined, {tidBruktIDager});
            }
        }
    }
)();