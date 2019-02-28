import * as React from 'react';
import AppProviders from './AppProvider';
import Banner from './components/banner/Banner';
import Registreringsinfo from './components/registreringsinfo/Registreringsinfo';

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
                <Registreringsinfo/>
            </AppProviders>
        );
    }
}

export default App;
