export const ORDINAER = 'ORDINAER';
export const SYKMELDT = 'SYKMELDT';

interface RegistreringsType {
    opprettetDato: string;
    sisteStilling: {
        label: string,
        konseptId: number,
        styrk08: string,
    };
    teksterForBesvarelse: [
        {
            sporsmalId: string,
            sporsmal: string,
            svar: string
        }
    ];
    'besvarelser': {
        andreForhold: string,
        dinSituasjon: string,
        fremtidigSituasjon: string,
        helseHinder: string,
        sisteStilling: string,
        tilbakeIArbeid: string,
        utdanning: string,
        utdanningBestatt: string,
        utdanningGodkjent: string
    };
}

export interface RegistreringDataType {
    type: string;
    registrering: RegistreringsType;

}
