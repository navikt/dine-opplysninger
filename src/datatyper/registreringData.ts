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
}

export interface RegistreringDataType {
    registrering: RegistreringsType;

}
export default RegistreringsType;