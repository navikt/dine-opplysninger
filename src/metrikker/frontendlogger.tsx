import { RegistreringDataType } from '../datatyper/registreringData';
import { HensynType } from '../datatyper/situasjon';

export interface Frontendlogger {
    event: (name: string, fields: object, tags: object) => void;
}

export function frontendLogger(eventNavn: string, feltObjekt?: object, tagObjekt?: object) {
    const frontendlogger: Frontendlogger = (window as any).frontendlogger; // tslint:disable-line
    if (frontendlogger) {
        frontendlogger.event(eventNavn, feltObjekt || {}, tagObjekt || {});
    }
}

function constructLoggerItem(registrering: RegistreringDataType, fra: undefined | string, til: string) {
    const regType = registrering ? registrering.type : undefined;
    const profilering = registrering && registrering.registrering && registrering.registrering.profilering ? registrering.registrering.profilering.innsatsgruppe : undefined;
    return {
        'registreringstype': regType,
        'innsatsgruppe': profilering,
        'fra': fra,
        'til': til
    };
}

export function loggLenkeKlikk(value: string) {
    frontendLogger('infoommeg.lenkeklikk', undefined, {'lenketittel': value});
}

export function loggEndretHovedMal(registrering: RegistreringDataType, fra: string, til: string) {
    frontendLogger('infoommeg.endreHovedmal', undefined, constructLoggerItem(registrering, fra, til));
}

export function loggEndretDelmal(registrering: string) {
    frontendLogger('infoommeg.endreDelmal', undefined, {'registreringstype': registrering});
}

export function loggEndretHelsehinder(registrering: RegistreringDataType, fra: HensynType | undefined, til: string) {
    frontendLogger('infoommeg.endreHelsehinder', undefined, constructLoggerItem(registrering, fra!.verdi, til));
}

export function loggEndretAndrehinder(registrering: RegistreringDataType, fra: HensynType | undefined, til: string) {
    frontendLogger('infoommeg.endreAndrehinder', undefined, constructLoggerItem(registrering, fra!.verdi, til));
}

export function loggFeilTilBruker(value: string) {
    frontendLogger('infoommeg.aksjonfeilet', undefined, {'aksjonstype': value});
}