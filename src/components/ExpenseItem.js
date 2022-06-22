import React from "react";
import "./ExpenseItem.css";

function ExpenseItem() {
  const expenseDate = new Date(2022, 6, 22);
  const expenseTitle = "Car Insurrence";
  const expenseAmount = "$267.67";
  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <p className="expense-item__price">{expenseAmount}</p>
      </div>
    </div>
  );
}

export default ExpenseItem;
