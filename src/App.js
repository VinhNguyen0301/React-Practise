import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenseObj = [
    {
      id: "es1",
      title: "Car Insurrence",
      amount: "$267.67",
      date: new Date(2022, 6, 22),
    },
    {
      id: "es2",
      title: "Moto Insurrence",
      amount: "$367.67",
      date: new Date(2022, 7, 23),
    },
  ];

  const addExpenseHandler = (expenseObj) => {
    console.log("In app.js");
    console.log({ expenseObj });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenseObj} />
    </div>
  );
};
export default App;
