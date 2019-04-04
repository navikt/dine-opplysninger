import * as React from 'react';
import AppProviders from './AppProvider';
import Banner from './components/banner/Banner';
import VeilederBanner from './components/veilederpanel/Veilederpanel';
import Registreringsinfo from './components/registreringsinfo/Registreringsinfo';
import Mal from './components/mal/Mal';

interface State {}

interface AppProps {}

class App extends React.Component<AppProps, State> {

    constructor(props: AppProps) {
        super(props);
    }

    render() {
        return (
            <AppProviders>
                <Banner/>
                <VeilederBanner/>
                <Mal/>
                <Registreringsinfo/>
            </AppProviders>
        );
    }
}

export default App;
