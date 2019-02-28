import * as React from 'react';
import OppfolgingStatus from './context/oppfolgningStatus/OppfolgingStatus';
import RegistreringDataProvider from './context/registreringData/RegistreringDataProvider';

interface AppProviderProps {
    children: React.ReactNode;
}

function AppProviders(props: AppProviderProps) {
    return (
        <OppfolgingStatus>
            <RegistreringDataProvider>
                        {props.children}
            </RegistreringDataProvider>
        </OppfolgingStatus>
    );
}

export default AppProviders;