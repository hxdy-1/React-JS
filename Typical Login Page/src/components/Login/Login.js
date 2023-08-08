import React, { useState, useEffect, useReducer } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

const emailReducer = (state, action) => {
    if (action.type === "USER_INPUT_EMAIL") {
        return { value: action.val, isValid: action.val.includes("@") };
    }
    if (action.type === "INPUT_BLURED_EMAIL") {
        return { value: state.value, isValid: state.value.includes("@") };
    }
    return { value: "", isValid: false };
};

const passwordReducer = (state, action) => {
    if (action.type === "USER_INPUT_PASS") {
        return { value: action.val, isValid: action.val.trim().length > 6 };
    }
    if (action.type === "INPUT_BLURED_PASS") {
        return { value: state.value, isValid: state.value.trim().length > 6 };
    }
    return { value: "", isValid: false };
};

const Login = (props) => {
    // const [enteredEmail, setEnteredEmail] = useState("");
    // const [emailIsValid, setEmailIsValid] = useState();
    // const [enteredPassword, setEnteredPassword] = useState("");
    // const [passwordIsValid, setPasswordIsValid] = useState();
    const [formIsValid, setFormIsValid] = useState(false);

    useEffect(() => {
        console.log("EFFECT RUNNING");

        return () => {
            console.log("EFFECT CLEANUP");
        };
    }, []);

    const [emailState, emailDispatchFn] = useReducer(emailReducer, {
        value: "",
        isValid: null,
    });

    const [passwordState, passwordDispatchFn] = useReducer(passwordReducer, {
        value: "",
        isValid: null,
    });

    // const { isValid: emailValidator } = emailState;
    // const { isValid: passwordValidator } = passwordState;

    useEffect(() => {
        const identifier = setTimeout(() => {
            console.log("Checking form validity!");
            setFormIsValid(emailState.isValid && passwordState.isValid);
        }, 500);

        return () => {
            console.log("CLEANUP");
            clearTimeout(identifier);
        };
    }, [emailState.isValid, passwordState.isValid]);

    // EMAIL CHANGE AND VALIDATIONS:
    const emailChangeHandler = (event) => {
        // setEnteredEmail(event.target.value);
        emailDispatchFn({ type: "USER_INPUT_EMAIL", val: event.target.value });

        // setFormIsValid(emailState.value.includes("@") && passwordState.isValid);
    };

    const validateEmailHandler = () => {
        // setEmailIsValid(emailState.isValid);
        emailDispatchFn({ type: "INPUT_BLURED_EMAIL" });
    };

    // PASSWORD CHANGE AND VALIDATIONS:
    const passwordChangeHandler = (event) => {
        // setEnteredPassword(event.target.value);
        passwordDispatchFn({
            type: "USER_INPUT_PASS",
            val: event.target.value,
        });

        // setFormIsValid(
        //     emailState.isValid && passwordState.value.trim().length > 6
        // );
    };

    const validatePasswordHandler = () => {
        // setPasswordIsValid(passwordState.value.trim().length > 6);
        passwordDispatchFn({ type: "INPUT_BLURED_PASS" });
    };

    const submitHandler = (event) => {
        event.preventDefault();
        props.onLogin(emailState.value, passwordState.value);
    };

    return (
        <Card className={classes.login}>
            <form onSubmit={submitHandler}>
                <div
                    className={`${classes.control} ${
                        emailState.isValid === false ? classes.invalid : ""
                    }`}
                >
                    <label htmlFor="email">E-Mail</label>
                    <input
                        type="email"
                        id="email"
                        value={emailState.value}
                        onChange={emailChangeHandler}
                        onBlur={validateEmailHandler}
                    />
                </div>
                <div
                    className={`${classes.control} ${
                        passwordState.isValid === false ? classes.invalid : ""
                    }`}
                >
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={passwordState.value}
                        onChange={passwordChangeHandler}
                        onBlur={validatePasswordHandler}
                    />
                </div>
                <div className={classes.actions}>
                    <Button
                        type="submit"
                        className={classes.btn}
                        disabled={!formIsValid}
                    >
                        Login
                    </Button>
                </div>
            </form>
        </Card>
    );
};

export default Login;
