import React from 'react';
import VeilederBanner from './components/veilederpanel/Veilederpanel';
import Registreringsinfo from './components/registreringsinfo/Registreringsinfo';
import Brodsmuler from './components/brodsmuler/brodsmuler';
import { TimeoutModal } from '@navikt/fo-session-timeout-modal';
import EndreRegistreringerMock from './mock/EndreRegistreringerMock';
import { CONTEXT_PATH } from './utils/constants';
import StoreProvider from './stores/StoreProvider';
import { DataLaster } from './components/DataLaster';

const App = () => (
	<StoreProvider>
		<DataLaster>
			<EndreRegistreringerMock />
			<Brodsmuler />
			<VeilederBanner />
			{/* FO-2393: Fjern kommentar når dine-opplysninger er klar ifm personvern */}
			{/*<Mal/>*/}
			{/*<Hensyn/>*/}
			<Registreringsinfo />
			<TimeoutModal authUrl={`${CONTEXT_PATH}/api/auth`} />
		</DataLaster>
	</StoreProvider>
);

export default App;
