import classes from "./AddUser.module.css";

import { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";

const AddUser = props => {

    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();

        if (!enteredUsername.trim().length || !enteredAge.trim().length) {
            return
        }
        if (+enteredAge < 1) {
            return
        }

        props.onAddUser(enteredUsername, enteredAge);

        setEnteredAge('');
        setEnteredUsername('');
    }

    const usernameChangeHandler = event => {
        setEnteredUsername(event.target.value)
    }
    const ageChangeHandler = event => {
        setEnteredAge(event.target.value)
    }
    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input
                    id="username"
                    onChange={usernameChangeHandler}
                    value={enteredUsername}
                    type="text" />
                <label htmlFor="age">Age</label>
                <input
                    id="age"
                    onChange={ageChangeHandler}
                    value={enteredAge}
                    type="number" />
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    )
}

export default AddUser;