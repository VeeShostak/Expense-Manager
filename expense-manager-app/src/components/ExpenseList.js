import React from 'react';
import { connect } from 'react-redux';

// create new HOC using connect

const ExpenseList = (props) => (
  <div>
    <h1>Expense List</h1>
    {props.filters.text}
    {props.expenses.length}
  </div>
);


const mapStateToProps = (state) => {
  return {
    expenses: state.expenses,
    filters: state.filters
  };
};

// Param1: things to get off of the store, 
// Param2: define component we want to create the connected version off
export default connect(mapStateToProps)(ExpenseList);