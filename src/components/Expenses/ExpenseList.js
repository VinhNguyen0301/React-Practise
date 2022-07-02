import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

function ExpenseList(props) {
  console.log("zzz", props.items);
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no espense</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((d) => (
        <ExpenseItem
          key={d.id} // if not have unique id, use index alternative
          title={d.title}
          amount={d.amount}
          date={d.date}
        />
      ))}
    </ul>
  );
}

export default ExpenseList;
