import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [showForm, setFormDisplayState] = useState(false);

  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
    setFormDisplayState(false);
  };

  const showFormHandler = () => {
    setFormDisplayState(true);
  };

  const stopEditingHandler = () => {
    setFormDisplayState(false);
  };

  return (
    <div className="new-expense">
      {!showForm && <button onClick={showFormHandler}>Add New Expense</button>}
      {showForm && (
        <ExpenseForm
          onSaveExpenseData={onSaveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};
export default NewExpense;
/*Call from child to parent Expenseform is child newexpense is parent*/
