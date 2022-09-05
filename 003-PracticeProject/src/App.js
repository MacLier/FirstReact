import { useState } from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';


function App() {
  const [usersList, setUsersList] = useState([]);

  const AddUserHandler = (userName, userAge) => {
    setUsersList(prevUsersList => {
      return [...prevUsersList, { name: userName, age: userAge, id: Math.random().toString() }]
    })
  }

  return (
    <div>
      <AddUser onAddUser={AddUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
