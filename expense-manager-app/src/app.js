import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';

import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css'; // css reset makes sure all browsers starting from the same place
import './styles/styles.scss';

const store = configureStore();

store.dispatch(addExpense({ description: 'Rent'}));
store.dispatch(addExpense({ description: 'Gas bill'}));
store.dispatch(setTextFilter('bill'));

setTimeout(() => {
    store.dispatch(setTextFilter('Rent'));
  }, 3000)
  

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

console.log(visibleExpenses);

// provider allows us to provide the store to all the components in our app.
// individual components that want to access the store can access it
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))
