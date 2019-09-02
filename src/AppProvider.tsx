import * as React from 'react';
import RegistreringDataProvider from './context/registreringData/RegistreringDataProvider';

interface AppProviderProps {
	children: React.ReactNode;
}

function AppProviders(props: AppProviderProps) {
	return <RegistreringDataProvider>{props.children}</RegistreringDataProvider>;
}

export default AppProviders;
