import React, {Fragment, useState} from 'react';

import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const addUserHandler = (event) => {
    event.preventDefault();
    if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }
    if(+enteredAge < 1) {
      return;
    }

    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername('');
    setEnteredAge('');
  };

  
  const usernameChangeHanlder = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value)
  }

  return(
    <Fragment>
      <ErrorModal title='An error ocurred!' message='Something went wrong'/>
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor='username'>UserName</label>
        <input id='username' type='text' value={enteredUsername} onChange={usernameChangeHanlder}/>
        <label htmlFor='age'>Age (Years)</label>
        <input id='age' type='number' value={enteredAge} onChange={ageChangeHandler}/>
        <Button type='submit'>Add User</Button>
      </form>
    </Card>
    </Fragment>
  );
};

export default AddUser;
