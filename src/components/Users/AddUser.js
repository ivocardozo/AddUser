import React, { useState } from 'react';

import Card from '../UI/Card';
import classes from './AddUser.module.css';

const AddUser = props => {

  const [userNameState, setUserNameState] = useState('');
  const [userAgeState, setUserAgeState] = useState('');
  const addUserHandler = (event) => {
    event.preventDefault();
    if(userNameState.trim().length === 0 || userAgeState.trim.length === 0) {
      return;
    }
    if(+userAgeState < 1) {
      return 
    }
    console.log(userNameState, userAgeState)
    setUserNameState('');
    setUserAgeState('');
  };

  const userNameChangeHandler = (event) => {
    setUserNameState(event.target.value);
  }

  const userAgeChangeHandler = (event) => {
    setUserAgeState(event.target.value);
  }

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor='username'>UserName</label>
        <input id='username' type='text' onChange={userNameChangeHandler} value={userNameState}/>
        <label>Age (Years)</label>
        <input id='age' type='number' onChange={userAgeChangeHandler} value={userAgeState}/>
        <button type='submit'>Add User</button>
      </form>
    </Card>
  );
};

export default AddUser;
