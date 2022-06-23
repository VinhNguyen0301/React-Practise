import "./App.css";
import Expenses from "./components/Expenses";

function App() {
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
  return <Expenses items={expenseObj} />;
}
export default App;
