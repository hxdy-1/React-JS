import React, { useState, useRef } from "react";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../ErrorModal/ErrorModal";

const AddUser = (props) => {
    const [error, setError] = useState();

    const nameRef = useRef();
    const ageRef = useRef();

    const submissionHandler = (e) => {
        e.preventDefault();
        // console.log("submitted");
        const enteredName = nameRef.current.value;
        const enteredAge = ageRef.current.value;
        if (enteredName.trim().length === 0 && enteredAge.trim().length === 0) {
            setError({
                title: "Invalid input",
                message: "Please enter a valid input (non-empty)",
            });
            return;
        }

        if (+enteredAge < 1) {
            setError({
                title: "Invalid age",
                message: "Please enter a valid age (> 0)",
            });
            return;
        }

        props.onAdd(enteredName, enteredAge);

        nameRef.current.value = "";
        ageRef.current.value = "";
    };

    const errorHandler = () => {
        setError(null);
    };

    return (
        <>
            {error && <ErrorModal error={error} onDismiss={errorHandler} />}
            <Card className={styles.input}>
                <form onSubmit={submissionHandler}>
                    <label htmlFor="userName">Username:</label>
                    <input type="text" id="userName" ref={nameRef} />
                    <label htmlFor="age">Age (Years)</label>
                    <input type="number" id="age" ref={ageRef} />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </>
    );
};

export default AddUser;
