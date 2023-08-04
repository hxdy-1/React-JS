import React, { useState } from "react";
import styles from "./addUser.module.css";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../ErrorModal/ErrorModal";

const AddUser = (props) => {
    const [inputUserName, setInputUserName] = useState("");
    const [inputAge, setInputAge] = useState("");
    const [error, setError] = useState();

    const submissionHandler = (e) => {
        e.preventDefault();
        console.log("submitted");

        // if (inputUserName.trim().length === 0 || inputAge.trim().length === 0) {
        if (inputUserName.trim().length === 0 && inputAge.trim().length === 0) {
            setError({
                title: "Invalid input",
                message: "Please enter a valid input (non-empty)",
            });
            return;
        }

        if (+inputAge < 1) {
            setError({
                title: "Invalid age",
                message: "Please enter a valid age (> 0)",
            });
            return;
        }

        console.log(inputUserName, inputAge);
        props.onAdd(inputUserName, inputAge);

        setInputUserName("");
        setInputAge("");
    };

    const userNameChangeHandler = (e) => {
        setInputUserName(e.target.value);
    };

    const ageChangeHandler = (e) => {
        setInputAge(e.target.value);
    };

    const errorHandler = () => {
        setError(null);
    };

    return (
        <div>
            {error && <ErrorModal error={error} onDismiss={errorHandler} />}
            <Card className={styles.input}>
                <form onSubmit={submissionHandler}>
                    <label htmlFor="userName">Username:</label>
                    <input
                        type="text"
                        id="userName"
                        onChange={userNameChangeHandler}
                        value={inputUserName}
                    />
                    <label htmlFor="age">Age (Years)</label>
                    <input
                        type="number"
                        id="age"
                        onChange={ageChangeHandler}
                        value={inputAge}
                    />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    );
};

export default AddUser;
