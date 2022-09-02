import { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css'

const NewExpense = (props) => {
    const [isEditing, setIsediting] = useState(false);

    const startEditingHandler = () => {
        setIsediting(true);
    };
    const stopEditingHandler = () => {
        setIsediting(false);
    };

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
        setIsediting(false);
    };

    return (
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm
                onCancel={stopEditingHandler}
                onSaveExpenseData={saveExpenseDataHandler} />}
        </div>
    )
};

export default NewExpense;