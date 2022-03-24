import { useState } from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUserList(prevUserList => [...prevUserList, {name: uName, age: uAge, id: Math.random().toString()}] )
  }
  return (
    <div>
     <AddUser addUser={addUserHandler}/>
     <UsersList users={userList}/>
    </div>
  );
}

export default App;
