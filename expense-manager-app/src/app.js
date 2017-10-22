import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';

import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import { login, logout } from './actions/auth';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css'; // css reset makes sure all browsers starting from the same place
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

import { firebase } from './firebase/firebase';
import LoadingPage from './components/LoadingPage';

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

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

// this callback is run when the user first visits the webpage, so we dispatch here
// 
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid));
    // once expenses are fetched, render app
    store.dispatch(startSetExpenses()).then(() => {
    renderApp();
    if (history.location.pathname === '/') {
        history.push('/dashboard');
    }
    });
  } else {
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
});