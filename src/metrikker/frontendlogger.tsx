import { RegistreringDataType } from '../datatyper/registreringData';
import { HensynType, SisteSituasjon } from '../datatyper/situasjon';
import { diffIDagerFraDatoTilNaa, harBrukerAlleredeGjortEndringer } from './utils';

export const INFOOMMEG_ENDREHELSEHINDER = 'infoommeg.endreHelsehinder';
export const INFOOMMEG_ENDREANDREHINDER = 'infoommeg.endreAndrehinder';

export interface Frontendlogger {
    event: (name: string, fields: object, tags: object) => void;
}

export function frontendLogger(eventNavn: string, feltObjekt?: object, tagObjekt?: object) {
    const frontendlogger: Frontendlogger = (window as any).frontendlogger; // tslint:disable-line
    if (frontendlogger) {
        frontendlogger.event(eventNavn, feltObjekt || {}, tagObjekt || {});
    }
}

function constructLoggerItem(registrering: RegistreringDataType, fra: undefined | string, til: string, antallDagerFraForrigeEndring: number) {
    const regType = registrering ? registrering.type : undefined;
    const profilering = registrering && registrering.registrering && registrering.registrering.profilering ? registrering.registrering.profilering.innsatsgruppe : undefined;
    return {
        'registreringstype': regType,
        'innsatsgruppe': profilering,
        'fra': fra,
        'til': til,
        antallDagerFraForrigeEndring
    };
}

export function loggLenkeKlikk(value: string) {
    frontendLogger('infoommeg.lenkeklikk', undefined, {'lenketittel': value});
}

export function loggEndretHovedMal(registrering: RegistreringDataType, fra: string, til: string, sisteSituasjon: SisteSituasjon) {
    const antallDagerFraForrigeEndring = diffIDagerFraDatoTilNaa(sisteSituasjon.helseHinder!.dato);

    loggTidBruktFraRegistreringTilForsteEndring(registrering, sisteSituasjon);
    frontendLogger('infoommeg.endreHovedmal', undefined, constructLoggerItem(registrering, fra, til, antallDagerFraForrigeEndring));
}

export function loggEndretDelmal(registrering: string) {
    frontendLogger('infoommeg.endreDelmal', undefined, {'registreringstype': registrering});
}

export function loggEndret(eventNavn: string, registrering: RegistreringDataType, fra: HensynType | undefined, til: string, sisteSituasjon: SisteSituasjon) {
    const antallDagerFraForrigeEndring = diffIDagerFraDatoTilNaa(sisteSituasjon.helseHinder!.dato);

    loggTidBruktFraRegistreringTilForsteEndring(registrering, sisteSituasjon);
    frontendLogger(eventNavn, undefined, constructLoggerItem(registrering, fra!.verdi, til, antallDagerFraForrigeEndring));
}

export function loggFeilTilBruker(value: string) {
    frontendLogger('infoommeg.aksjonfeilet', undefined, {'aksjonstype': value});
}

export function loggAntallBesokPaaSiden() {
    frontendLogger('infoommeg.antall.besok', undefined, {});
}

const loggTidBruktFraRegistreringTilForsteEndring = (registrering: RegistreringDataType, sisteSituasjon: SisteSituasjon) => {
    if (!harBrukerAlleredeGjortEndringer(registrering, sisteSituasjon)) {
        const tidBruktIDager = diffIDagerFraDatoTilNaa(registrering.registrering.opprettetDato);
        frontendLogger('infoommeg.tidBruktFraRegistreringTilEndring', undefined, {tidBruktIDager});
    }
};