import * as React from 'react';
import AppProviders from './AppProvider';
import VeilederBanner from './components/veilederpanel/Veilederpanel';
import Registreringsinfo from './components/registreringsinfo/Registreringsinfo';
import Mal from './components/mal/Mal';
import EndreRegistreringerMock from './mock/EndreRegistreringerMock';
import Brodsmuler from './components/brodsmuler/brodsmuler';

interface State {}

interface AppProps {}

class App extends React.Component<AppProps, State> {

    constructor(props: AppProps) {
        super(props);
    }

    render() {
        return (
            <AppProviders>
                <EndreRegistreringerMock/>
                <Brodsmuler/>
                <VeilederBanner/>
                <Mal/>
                <Registreringsinfo/>
            </AppProviders>
        );
    }
}

export default App;
