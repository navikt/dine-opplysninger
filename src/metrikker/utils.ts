import { RegistreringDataType } from '../datatyper/registreringData';
import { SisteSituasjon } from '../datatyper/situasjon';

export function diffIDagerFraDatoTilNaa(fraDato: string) {
    return Math.ceil(
        Math.abs(new Date(fraDato).getTime() - new Date().getTime()) / (1000 * 3600 * 24)
    );
}

export function harBrukerAlleredeGjortEndringer(registrering: RegistreringDataType, sisteSituasjon: SisteSituasjon) {
    return Object.keys(sisteSituasjon).find((key) => {
        const d = sisteSituasjon[key] ? sisteSituasjon[key].dato : '';
        return new Date(registrering.registrering.opprettetDato).getTime() !== new Date(d).getTime();
    });
}