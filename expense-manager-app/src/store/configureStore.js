import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'; // Support for dispatching functions
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
import authReducer from '../reducers/auth';



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
          // root state name(property), reducer that will manage it
          expenses: expensesReducer,
          filters: filtersReducer,
          auth: authReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
      );

      return store;
};

