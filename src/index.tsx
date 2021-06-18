import React from 'react';
import ReactDOM from 'react-dom';
import 'core-js/features/array/flat-map';
import 'core-js/features/map';
import 'core-js/features/promise';
import 'core-js/features/set';
import 'raf/polyfill';
import 'whatwg-fetch';
import App from './components/App';
import { Provider } from 'react-redux';
import { store } from './store';
import './index.css';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
);