import classes from './AddUser.module.css';
import Card from '../UI/Card';

const AddUser = props => {
  return (
    <Card className={classes.input}>
      <form>
        <label htmlFor='username'>Username</label>
        <input id='username'/>
        <label htmlFor='age'>Age</label>
        <input id='age'/>
        <button>Add User</button>
      </form>
    </Card>
  );
};

export default AddUser;