import React from 'react';
import AppProviders from './AppProvider';
import VeilederBanner from './components/veilederpanel/Veilederpanel';
import Registreringsinfo from './components/registreringsinfo/Registreringsinfo';
import Brodsmuler from './components/brodsmuler/brodsmuler';
import { TimeoutModal } from '@navikt/fo-session-timeout-modal';
import EndreRegistreringerMock from './mock/EndreRegistreringerMock';
import { CONTEXT_PATH } from './utils/constants';

const App = () =>
    (
        <AppProviders>
            <TimeoutModal authUrl={`${CONTEXT_PATH}/api/auth`}/>
            <EndreRegistreringerMock/>
            <Brodsmuler/>
            <VeilederBanner/>
            {/* FO-2393: Fjern kommentar når dine-opplysninger er klar ifm personvern */}
            {/*<Mal/>*/}
            {/*<Hensyn/>*/}
            <Registreringsinfo/>
        </AppProviders>
    );

export default App;
