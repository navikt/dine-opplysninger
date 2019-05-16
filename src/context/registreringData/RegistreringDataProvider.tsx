import * as React from 'react';
import {hentOppfolgingStatus, hentRegistreringData, hentSituasjon, SisteSitvasjon} from '../../api/api';
import { RegistreringDataType } from '../../datatyper/registreringData';
import {useEffect, useState} from "react";
import NavFrontendSpinner from "nav-frontend-spinner";
import AlertStripe from "nav-frontend-alertstriper";

export const initalStateRegistreringData: RegistreringDataType = {
    type: '',
    registrering: {
        opprettetDato: '',
        manueltRegistrertAv: null,
        id: 0,
        sisteStilling : {
            label: '',
            konseptId: 0,
            styrk08: '',
        },
        profilering: {
            jobbetSammenhengendeSeksAvTolvSisteManeder: false,
            alder: 0,
            innsatsgruppe: ''
        },
        teksterForBesvarelse: [{
            sporsmalId: '',
            sporsmal: '',
            svar: '',
        }],
        besvarelse: {
            andreForhold: '',
            dinSituasjon: '',
            fremtidigSituasjon: '',
            helseHinder: '',
            sisteStilling: '',
            tilbakeIArbeid: '',
            utdanning: '',
            utdanningBestatt: '',
            utdanningGodkjent: ''
        },
    }
};

export const RegistreringDataContext = React.createContext<RegistreringDataType>(initalStateRegistreringData);
export const SisteSituasjonContext = React.createContext<SisteSitvasjon>({});

interface RegistreringDataContextProviderProps {
    children: React.ReactNode;
}

function useFetch<T>(func: () => Promise<T>) {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [data, setData] = useState<T | null>(null);

    useEffect(() => {
        setIsLoading(true);
       func()
           .then(data => {
               setData(data);
               setIsLoading(false);
           })
           .catch(() => {
               setIsError(true);
               setIsLoading(false);
           })
    }, [func]);


    return {isLoading, isError, data}
}

function RegistreringDataProvider(props: RegistreringDataContextProviderProps) {
    const situasjon = useFetch(hentSituasjon);
    const registrering = useFetch(hentRegistreringData);
    const oppfolgingStatus = useFetch(hentOppfolgingStatus);

    if(situasjon.isLoading || registrering.isLoading || oppfolgingStatus.isLoading) {
        return <div className="spinner-wrapper centered"><NavFrontendSpinner type="XXL"/></div>;
    }
    console.log(situasjon);

    if( registrering.isError || oppfolgingStatus.isError || situasjon.isError || registrering.data === null || situasjon.data === null) {
        return <div> ERROR </div>
    }

    if(!oppfolgingStatus.data || !oppfolgingStatus.data.underOppfolging) {
        return (
            <div id="ikke-under-oppfolgning-container">
                <AlertStripe type="info" className="ikke-under-oppfolgning-boks">
                    Du er ikke under arbeidsrettet oppfølgning.
                </AlertStripe>
            </div>
        );
    }

    return (
        <RegistreringDataContext.Provider value={registrering.data}>
            <SisteSituasjonContext.Provider value={situasjon.data}>
                {props.children}
            </SisteSituasjonContext.Provider>
        </RegistreringDataContext.Provider>
    );
}

//TODO FIKS TYPER
export function registreringDataContextConsumerHoc<P>(Component: React.ComponentType<P & RegistreringDataType>): React.ComponentType<P> {
    return (props: P) => (
        <RegistreringDataContext.Consumer>
            {(context: RegistreringDataType) => {
                return <Component {...props} {...context} />;
            }}
        </RegistreringDataContext.Consumer>
    );
}

export default RegistreringDataProvider;
