import React, { useState } from "react";
import "./Expenses.css";
import Card from "./Card";
import ExpensesFilter from "./NewExpense/ExpensesFilter";
// import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filteredyear, setFilterYear] = useState("2022");

  const selectYearHandler = (selectYear) => {
    setFilterYear(selectYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredyear;
  });


  return (
    <>
      <div>
        <Card className="expenses">
          <ExpensesFilter
            selectedYear={filteredyear}
            filterYear={selectYearHandler}
          />
          {/* <ExpensesChart expenses={filteredExpenses}/> */}
          <ExpensesList items={filteredExpenses}/>
        </Card> 
      </div>
    </>
  );
};

export default Expenses;
