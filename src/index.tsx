import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.less';

if (process.env.REACT_APP_MOCK === 'true') {
    require('./mock');
}

ReactDOM.render(<App />, document.getElementById('root'));
