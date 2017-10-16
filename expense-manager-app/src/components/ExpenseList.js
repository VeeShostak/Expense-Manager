import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

// create new HOC using connect

const ExpenseList = (props) => (
  <div>
    <h1>Expense List</h1>
    {props.expenses.map( (expense) => {
        return <ExpenseListItem key={expense.id} {...expense} />;
    })}
  </div>
);


const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

// Param1: things to get off of the store, 
// Param2: define component we want to create the connected version off
export default connect(mapStateToProps)(ExpenseList);