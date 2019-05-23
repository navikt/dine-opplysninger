import * as React from 'react';
import AppProviders from './AppProvider';
import VeilederBanner from './components/veilederpanel/Veilederpanel';
import Registreringsinfo from './components/registreringsinfo/Registreringsinfo';
import Mal from './components/mal/Mal';
import EndreRegistreringerMock from './mock/EndreRegistreringerMock';
import Brodsmuler from './components/brodsmuler/brodsmuler';
import Hensyn from './components/hensyn/hensyn';
import TimoutboxModal from 'nav-fo-timeoutbox-modal/dist/TimoutboxModal';

interface State {}

interface AppProps {}

class App extends React.Component<AppProps, State> {

    constructor(props: AppProps) {
        super(props);
    }

    render() {
        return (
            <AppProviders>
                <TimoutboxModal/>
                <EndreRegistreringerMock/>
                <Brodsmuler/>
                <VeilederBanner/>
                <Mal/>
                <Hensyn/>
                <Registreringsinfo/>
            </AppProviders>
        );
    }
}

export default App;
