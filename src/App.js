import React, { useState } from "react";
import Expenses from "./Components/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";

const App = () => {

  const dummyExpenses = [
    {
      id: 1,
      title: "Toilet paper",
      amount: 279,
      date: new Date(2020, 10, 30),
    },
    {
      id: 2,
      title: "Toilet paper",
      amount: 349,
      date: new Date(2021, 11, 1),
    },
    {
      id: 3,
      title: "News paper",
      amount: 559,
      date: new Date(2022, 11, 5),
    },
    {
      id: 4,
      title: "Car Insurance",
      amount: 499,
      date: new Date(2022, 10, 25),
    },
    {
      id: 5,
      title: "Maintenance",
      amount: 799,
      date: new Date(2022, 10, 16),
    }
  ];

  const [expenses, setExpenses] = useState(dummyExpenses);

const addExpenseHandler = expense => {
  setExpenses((prevExpneses) => {
    return [expense, ...prevExpneses];
  });
}

  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </>
  );
};

export default App;
