import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";
import ExpenseList from "./ExpenseList";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2022");
  const onChangeFilterHandler = (filterYear) => {
    console.log("filterYear", filterYear);
    setFilterYear(filterYear);
  };
  const filteredYear = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  }); // filter return array object by filterYear ,after that use this arr to render UI

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYear}
          onChangeFilter={onChangeFilterHandler}
        />
        <ExpenseList items={filteredYear} />
      </Card>
    </div>
  );
};

export default Expenses;
