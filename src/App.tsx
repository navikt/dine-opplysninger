import * as React from 'react';
import AppProviders from './AppProvider';
import Banner from './components/banner/Banner';

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
            </AppProviders>
        );
    }
}

export default App;
