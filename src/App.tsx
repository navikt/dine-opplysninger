import React from 'react';
import AppProviders from './AppProvider';
import VeilederBanner from './components/veilederpanel/Veilederpanel';
import Registreringsinfo from './components/registreringsinfo/Registreringsinfo';
import Brodsmuler from './components/brodsmuler/brodsmuler';
import { TimeoutModal } from '@navikt/fo-session-timeout-modal';
import EndreRegistreringerMock from './mock/EndreRegistreringerMock';

const App = () =>
    (
        <AppProviders>
            <TimeoutModal/>
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
