export const ORDINAER = 'ORDINAER';
export const SYKMELDT = 'SYKMELDT';

export interface SvarTekster {
    sporsmalId: string;
    sporsmal: string;
    svar: string;
}

export interface RegistreringsType {
    opprettetDato: string;
    manueltRegistrertAv: object  | null;
    id: number;
    sisteStilling?: {
        label: string,
        konseptId: number,
        styrk08: string,
    };
    profilering?: {
        jobbetSammenhengendeSeksAvTolvSisteManeder: boolean,
        alder: number,
        innsatsgruppe: string
    };
    teksterForBesvarelse: SvarTekster[];
    besvarelse: {
        dinSituasjon: string | null,
        fremtidigSituasjon: string | null,
        sisteStilling: string | null,
        tilbakeIArbeid: string | null,
        andreForhold: string | null,
        helseHinder: string | null,
        utdanning: string | null,
        utdanningBestatt: string | null,
        utdanningGodkjent: string | null
    };
}

export interface RegistreringDataType {
    type: string;
    registrering: RegistreringsType;

}
