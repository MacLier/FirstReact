import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
  const expenses = [
    { title: 'Car Insurence', amount: 294.67, date: new Date(2022, 8, 25) },
    { title: 'Electric bills', amount: 27.34, date: new Date(2022, 8, 25) },
    { title: 'Gas bills', amount: 43.12, date: new Date(2022, 8, 25) },
    { title: 'New Desk ( Wooden )', amount: 450, date: new Date(2022, 8, 25) },
  ];
  return (
    <div>
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
