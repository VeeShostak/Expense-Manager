import uuid from 'uuid';
import database from '../firebase/firebase';

// componenet calls action generator
// action generator returns object
// component takes result from action generator and  dispatches object
// redux store changes


// with firebase (asynchronous calls:)

// componenet calls action generator
// action generator returns function
// component takes result from action generator and  dispatches function
// function runs (dispatches other actions, and other things like firebase code)


// ADD_EXPENSE
// export const addExpense = (
//   {
//     // destructure args
//     description = '',
//     note = '',
//     amount = 0,
//     createdAt = 0
//   } = {}
// ) => {
//   return {
//     type: 'ADD_EXPENSE',
//     expense: {
//       // set properties using shorthand syntax
//       id: uuid(),
//       description,
//       note,
//       amount,
//       createdAt
//     }
//   }
// };
export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense
});

// returning a func works because we setup redux-thunk
export const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {

    // destructure arg
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = expenseData;
    
    const expense = { description, note, amount, createdAt };
    
    // return to continue promise chaining in test file
    return database.ref('expenses').push(expense).then((ref) => {
      // dispatch to the store
      dispatch(addExpense({
        id: ref.key,
        ...expense
      }));
    });
  };
};


// ==================
// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => {
  return {
    type: 'REMOVE_EXPENSE',
    id
  }
};

export const startRemoveExpense = ({ id } = {}) => {
  return (dispatch) => {
    return database.ref(`expenses/${id}`).remove().then(() => {
      dispatch(removeExpense({ id }));
    });
  };
};

// ==================
// EDIT_EXPENSE
export const editExpense = (id, updates) => {
  return {
    type: 'EDIT_EXPENSE',
    id,
    updates
  }
}

// ==================
// SET_EXPENSES
export const setExpenses = (expenses) => ({
  type: 'SET_EXPENSES',
  expenses
});


export const startSetExpenses = () => {
  return (dispatch) => {
    return database.ref('expenses').once('value').then((snapshot) => {
      const expenses = [];

      snapshot.forEach((childSnapshot) => {
        expenses.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });

      dispatch(setExpenses(expenses));
    });
  };
};