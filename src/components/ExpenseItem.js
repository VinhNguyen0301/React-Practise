import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";

function ExpenseItem(props) {
  console.log("props", props);

  return (
    <Card className="expense-item">
      <ExpenseDate dateChild={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <p className="expense-item__price">{props.amount}</p>
      </div>
    </Card>
  );
}

export default ExpenseItem;
