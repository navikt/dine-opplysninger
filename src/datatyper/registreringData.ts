interface RegistreringsType {
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
    'besvarelse': {
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
    registrering: RegistreringsType;

}
export default RegistreringsType;
