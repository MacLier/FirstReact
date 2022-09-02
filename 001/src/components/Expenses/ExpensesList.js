import "./ExpensesList.css"
import ExpenseItem from "./ExpenseItem";

const ExpensesList = props => {

    return (
        <ul className="expenses-list">
            {props.items.length === 0 ? <h2 className="expenses-list__fallback">No expenses found</h2> : props.items.map(expense =>
                <ExpenseItem
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                    key={expense.id} />)}
        </ul>
    );
}

export default ExpensesList;