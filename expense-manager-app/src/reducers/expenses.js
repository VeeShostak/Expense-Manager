// Expenses Reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      // return state.concat(action.expense)
      // spread operator. never change that state
      return [
        ...state, // spread all prev values of arr here
        action.expense
      ];
      case 'REMOVE_EXPENSE':
        // destructure the expense arr and get id
        return state.filter(( {id} ) => {
          return action.id !== id;
        });
      case 'EDIT_EXPENSE':
        // destructure the expense arr and get id
        return state.map(( expense ) => {
          if(expense.id === action.id) {
            return {
              ...expense, // destructure original object
              ...action.updates // ovverride passed down values
            };
          } else {
            return expense;
          }
        });
      case 'SET_EXPENSES':
        return action.expenses;
      default:
        return state;
  }
};

export default expensesReducer;