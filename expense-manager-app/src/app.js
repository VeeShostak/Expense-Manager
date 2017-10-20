import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';

import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css'; // css reset makes sure all browsers starting from the same place
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

import { firebase } from './firebase/firebase';

const store = configureStore();

// provider allows us to provide the store to all the components in our app.
// individual components that want to access the store can access it
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
};

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
  if (user) {

    // once expenses are fetched, render app
    store.dispatch(startSetExpenses()).then(() => {
    renderApp();
    if (history.location.pathname === '/') {
        history.push('/dashboard');
    }
    });
  } else {
    renderApp();
    history.push('/');
  }
});