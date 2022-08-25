import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses = [
    { title: 'Car Insurence', amount: 294.67, date: new Date(2022, 8, 25) },
    { title: 'Electric bills', amount: 27.34, date: new Date(2022, 8, 25) },
    { title: 'Gas bills', amount: 43.12, date: new Date(2022, 8, 25) },
    { title: 'New Desk ( Wooden )', amount: 450, date: new Date(2022, 8, 25) },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></ExpenseItem>
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}></ExpenseItem>
      <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}></ExpenseItem>
    </div>
  );
}

export default App;
