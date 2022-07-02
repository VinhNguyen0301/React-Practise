import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import Card from "./components/UI/Card";
import React, { useState } from "react";

const Dummy_Object = [
  {
    id: "es1",
    title: "Car Insurrence",
    amount: "267.67",
    date: new Date(2021, 6, 22),
  },
  {
    id: "es2",
    title: "Moto Insurrence",
    amount: "367.67",
    date: new Date(2020, 7, 23),
  },
  {
    id: "es3",
    title: "Book ",
    amount: "247.67",
    date: new Date(2019, 7, 24),
  },
  {
    id: "es4",
    title: "Game ",
    amount: "2047.67",
    date: new Date(2022, 7, 25),
  },
];
const App = () => {
  const [expenseData, setExpenseData] = useState(Dummy_Object);

  const addExpenseHandler = (expenseObj) => {
    console.log({ expenseObj });
    setExpenseData((prevExpense) => {
      return [expenseObj, ...prevExpense];
    }); // this is a array object, focus it
    // using func here because we want to have and use previous state if we need, this is a rightways
  };

  return (
    <div>
      <Card className="expenses app-card-background">
        <NewExpense onAddExpense={addExpenseHandler} />
        <Expenses items={expenseData} />
      </Card>
    </div>
  );
};
export default App;
