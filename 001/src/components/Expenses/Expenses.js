import "./Expenses.css";

import { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020')

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }

    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                {props.items.map(expense => <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} id={expense.id} />)}

            </Card>
        </div>

    )
}

export default Expenses;