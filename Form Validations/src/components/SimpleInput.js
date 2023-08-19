// import { useState } from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
    // FOR NAME INPUT:
    const {
        value: enteredName,
        isValid: isEnteredNameValid,
        hasError: nameHasError,
        InputChangeHandler: nameInputChangeHandler,
        InputBlurHandler: nameInputBlurHandler,
        reset: resetName,
    } = useInput((value) => value.trim().length !== 0);

    // FOR EMAIL INPUT:
    const {
        value: enteredEmail,
        isValid: isEnteredEmailValid,
        hasError: emailHasError,
        InputChangeHandler: emailInputChangeHandler,
        InputBlurHandler: emailInputBlurHandler,
        reset: resetEmail,
    } = useInput(
        (value) => value.trim().length !== 0 && value.trim().includes("@")
    );

    let isFormValid = false;

    if (isEnteredNameValid && isEnteredEmailValid) {
        isFormValid = true;
    }

    // OVERALL FORM:
    const submissionHandler = (e) => {
        e.preventDefault();

        if (!isEnteredNameValid) {
            console.log("returned");
            return;
        }
        console.log(enteredName);
        console.log(enteredEmail);

        resetName();
        resetEmail();
    };

    const nameInputClasses = nameHasError
        ? "form-control invalid"
        : "form-control";

    const emailInputClasses = emailHasError
        ? "form-control invalid"
        : "form-control";

    return (
        <form onSubmit={submissionHandler}>
            <div className={nameInputClasses}>
                <label htmlFor="name">Your Name</label>
                <input
                    type="text"
                    id="name"
                    onChange={nameInputChangeHandler}
                    onBlur={nameInputBlurHandler}
                    value={enteredName}
                />
                {nameHasError && (
                    <p className="error-text">Enter a valid name</p>
                )}
            </div>
            <div className={emailInputClasses}>
                <label htmlFor="email">Your E-mail</label>
                <input
                    type="email"
                    id="email"
                    onChange={emailInputChangeHandler}
                    onBlur={emailInputBlurHandler}
                    value={enteredEmail}
                />
                {emailHasError && (
                    <p className="error-text">Enter a valid E-mail</p>
                )}
            </div>
            <div className="form-actions">
                <button disabled={!isFormValid}>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
