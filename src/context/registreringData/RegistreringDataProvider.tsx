import * as React from 'react';
import { hentRegistreringData } from '../../api/api';
import { RegistreringDataType } from '../../datatyper/registreringData';
import DataFetcher from '../../utils/dataFetcher';

export const initalStateRegistreringData: RegistreringDataType = {
    registrering: {
        sisteStilling : {
            label: '',
            konseptId: 0,
            styrk08: '',
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

const RegistreringDataContext = React.createContext<RegistreringDataType>(initalStateRegistreringData);

interface RegistreringDataContextProviderProps {
    children: React.ReactNode;
}

function RegistreringDataProvider(props: RegistreringDataContextProviderProps) {

    return (
        <DataFetcher<RegistreringDataType> fetchFunc={() => hentRegistreringData()} >
            {(data: RegistreringDataType) =>
                <RegistreringDataContext.Provider value={data}>
                    {props.children}
                </RegistreringDataContext.Provider>
            }
        </DataFetcher>
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
