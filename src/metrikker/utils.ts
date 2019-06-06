import { frontendLogger } from './frontendlogger';
import { RegistreringDataType } from '../datatyper/registreringData';
import { SisteSituasjon } from '../datatyper/situasjon';

export const loggTidBruktFraRegistreringTilForsteEndring = (function () {
        let called = false;
        return function (registrering: RegistreringDataType, sisteSituasjon: SisteSituasjon) {
            if (!called) {
                called = true;
                if (erAlleredeEndret(registrering, sisteSituasjon)) {
                    const tidBruktIDager = Math.ceil(
                        Math.abs(new Date(registrering.registrering.opprettetDato).getTime() - new Date().getTime()) / (1000 * 3600 * 24)
                    );
                    frontendLogger('infoommeg.tidBruktFraRegistreringTilEndring', undefined, {tidBruktIDager});
                }
            }
        };
    }
)();

function erAlleredeEndret(registrering: RegistreringDataType, sisteSituasjon: SisteSituasjon) {
    let erEndret = false;
    Object.keys(sisteSituasjon).filter((key) => {
        const d = sisteSituasjon[key] ? sisteSituasjon[key].dato : '';
        erEndret = new Date(registrering.registrering.opprettetDato).getTime() === new Date(d).getTime();
    });
    return erEndret;
}