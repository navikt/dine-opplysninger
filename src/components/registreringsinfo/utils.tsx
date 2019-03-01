import * as React from 'react';
import { RegistreringDataType } from '../../datatyper/registreringData';

const hentSpm = (svarState: any, sporsmalId: string) => { // tslint:disable-line
    const sporsmalsindeks = svarState.findIndex((data: any) => data.sporsmalId === sporsmalId); // tslint:disable-line
    return (sporsmalsindeks >= 0) ? svarState[sporsmalsindeks].sporsmal : undefined;
};

const hentSvar = (svarState: any, sporsmalId: string) => { // tslint:disable-line
    const sporsmalsindeks = svarState.findIndex((data: any) => data.sporsmalId === sporsmalId); // tslint:disable-line
    return (sporsmalsindeks >= 0) ? svarState[sporsmalsindeks].svar : undefined;
};

export const registreringsInfoConfig = (registreringState: RegistreringDataType) => [
    {
        id: 'dinSituasjon',
        element: (
            <li className="typo-normal">
                <strong>
                    {
                        hentSpm(registreringState.registrering.teksterForBesvarelse, 'dinSituasjon')
                    }
                    &nbsp;
                </strong>
                {
                    hentSvar(registreringState.registrering.teksterForBesvarelse, 'dinSituasjon')
                }
            </li>
        )
    },
    {
        id: 'utdanning',
        element: (
            <li className="typo-normal">
                <strong>
                    {
                        hentSpm(registreringState.registrering.teksterForBesvarelse, 'utdanning')
                    }
                    &nbsp;
                </strong>
                {
                    hentSvar(registreringState.registrering.teksterForBesvarelse, 'utdanning')
                }
            </li>
        )
    },
    {
        id: 'utdanningBestatt',
        element: (
            <li className="typo-normal">
                <strong>
                    {
                        hentSpm(registreringState.registrering.teksterForBesvarelse, 'utdanningBestatt')
                    }
                    &nbsp;
                </strong>
                {
                    hentSvar(registreringState.registrering.teksterForBesvarelse, 'utdanningBestatt')
                }
            </li>
        )
    },
    {
        id: 'utdanningGodkjent',
        element: (
            <li className="typo-normal">
                <strong>
                    {
                        hentSpm(registreringState.registrering.teksterForBesvarelse, 'utdanningGodkjent')
                    }
                    &nbsp;
                </strong>
                {
                    hentSvar(registreringState.registrering.teksterForBesvarelse, 'utdanningGodkjent')
                }
            </li>
        )
    },
    {
        id: 'sisteStilling',
        element: (
            <li className="typo-normal">
                <strong>
                    {
                        hentSpm(registreringState.registrering.teksterForBesvarelse, 'sisteStilling')
                    }
                    &nbsp;
                </strong>
                {
                    hentSvar(registreringState.registrering.teksterForBesvarelse, 'sisteStilling')
                }
            </li>
        )
    },
    {
        id: 'helseHinder',
        element: (
            <li className="typo-normal">
                <strong>
                    {
                        hentSpm(registreringState.registrering.teksterForBesvarelse, 'helseHinder')
                    }
                    &nbsp;
                </strong>
                {
                    hentSvar(registreringState.registrering.teksterForBesvarelse, 'helseHinder')
                }
            </li>
        )
    },
    {
        id: 'andreForhold',
        element: (
            <li className="typo-normal">
                <strong>
                    {
                        hentSpm(registreringState.registrering.teksterForBesvarelse, 'andreForhold')
                    }
                    &nbsp;
                </strong>
                {
                    hentSvar(registreringState.registrering.teksterForBesvarelse, 'andreForhold')
                }
            </li>
        )
    },
]
