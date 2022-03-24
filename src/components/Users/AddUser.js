import { useState } from 'react';

import classes from './AddUser.module.css';
import Card from '../UI/Card';

const AddUser = props => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const addUserHandler = event => {
    console.log(enteredUsername, enteredAge);
    event.preventDefault();
    if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }
    if(+enteredAge < 1) {
      return;
    }
    setEnteredUsername('');
    setEnteredAge('');
  };

  const usernameChangeHandler = event => {
    setEnteredUsername(event.target.value);
  };

  const userAgeChangeHandler = event => {
    setEnteredAge(event.target.value);
  };

  return (
    <Card className={classes.input}>
      <form>
        <label htmlFor='username'>Username</label>
        <input id='username' value={enteredUsername} onChange={usernameChangeHandler}/>
        <label htmlFor='age'>Age</label>
        <input id='age' value={enteredAge} onChange={userAgeChangeHandler}/>
        <button onClick={addUserHandler}>Add User</button>
      </form>
    </Card>
  );
};

export default AddUser;