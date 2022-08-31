import { useState } from "react";
import "./ExpenseForm.css"

const ExpenseForm = () => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label for="title">Title</label>
                    <input type="text" id="title" name="title" onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label for="amount">Amount</label>
                    <input type="number" min="0.01" step="0.01" id="amount" name="amount" onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label for="date">Date</label>
                    <input type="date" min="2021-09-01" max="2022-12-31" id="date" name="date" onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actios">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;