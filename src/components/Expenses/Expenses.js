import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2022");
  const onChangeFilterHandler = (filterYear) => {
    console.log("filterYear", filterYear);
    setFilterYear(filterYear);
  };
  const filteredYear = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  }); // filter return array object by filterYear ,after that use this arr to render UI

  // supper clean code below
  let espenseContent = <p>No data in database</p>;
  if (filteredYear.length > 0) {
    espenseContent =
      filteredYear.length > 0 &&
      filteredYear.map((d) => {
        return (
          <ExpenseItem
            key={d.id} // if not have unique id, use index alternative
            title={d.title}
            amount={d.amount}
            date={d.date}
          />
        );
      });
  }
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYear}
          onChangeFilter={onChangeFilterHandler}
        />
        {espenseContent}
      </Card>
    </div>
  );
};

export default Expenses;
