import { useState } from 'react';

import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DummyData = [
  { id: 'e1', title: 'Car Insurence', amount: 294.67, date: new Date(2020, 7, 14) },
  { id: 'e2', title: 'Electric bills', amount: 27.34, date: new Date(2021, 2, 12) },
  { id: 'e3', title: 'Gas bills', amount: 43.12, date: new Date(2021, 2, 28) },
  { id: 'e4', title: 'New Desk ( Wooden )', amount: 450, date: new Date(2021, 5, 12) },
];

const App = () => {
  const [expenses, setExpenses] = useState(DummyData);

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      console.log([expense, ...prevExpenses]);
      return [expense, ...prevExpenses]
    });
  }


  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
