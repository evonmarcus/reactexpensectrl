import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "../Expenses/ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");

  let filteredArrary = [...props.items].filter((x) => {
    return x.date.getFullYear().toString() === filteredYear;
  });

  const selctedYearFilter = (data) => {
    console.log(data);
    setFilteredYear(data);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onSelectYear={selctedYearFilter}
        />
        <ExpensesChart expenses={filteredArrary} />
        <ExpensesList items={filteredArrary} />
      </Card>
    </div>
  );
};

export default Expenses;
