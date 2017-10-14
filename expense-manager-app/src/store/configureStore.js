import { createStore, combineReducers } from 'redux';
import expensesReducer from '../reducers/expenses'
import filtersReducer from '../reducers/filters'

export default () => {
    const store = createStore(
        combineReducers({
          // root state name(property), reducer that will manage it
          expenses: expensesReducer,
          filters: filtersReducer
        })
      );

      return store;
};

