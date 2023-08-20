import useInput from "../hooks/use-input";

const nameValidator = (value) => value.trim().length !== 0;
const emailValidator = (value) =>
    value.trim().length !== 0 && value.trim().includes("@");

const BasicForm = (props) => {
    const {
        value: enteredFirstName,
        isValid: isFirstNameValid,
        hasError: firstNameHasError,
        InputChangeHandler: firstNameInputChangeHandler,
        InputBlurHandler: firstNameInputBlurHandler,
        reset: resetFirstName,
    } = useInput(nameValidator);

    const {
        value: enteredLastName,
        isValid: isLastNameValid,
        hasError: lastNameHasError,
        InputChangeHandler: lastNameInputChangeHandler,
        InputBlurHandler: lastNameInputBlurHandler,
        reset: resetLastName,
    } = useInput(nameValidator);

    const {
        value: enteredEmail,
        isValid: isEmailValid,
        hasError: emailHasError,
        InputChangeHandler: emailInputChangeHandler,
        InputBlurHandler: emailInputBlurHandler,
        reset: resetEmail,
    } = useInput(emailValidator);

    let isFormValid = false;

    if (isFirstNameValid && isLastNameValid && isEmailValid) {
        isFormValid = true;
    }

    // OVERALL FORM:
    const submissionHandler = (e) => {
        e.preventDefault();

        if (!isFirstNameValid) {
            console.log("returned");
            return;
        }
        // console.log(enteredName);
        // console.log(enteredEmail);

        resetFirstName();
        resetLastName();
        resetEmail();
    };

    const firstNameInputClasses = firstNameHasError
        ? "form-control invalid"
        : "form-control";

    const lastNameInputClasses = lastNameHasError
        ? "form-control invalid"
        : "form-control";

    const emailInputClasses = emailHasError
        ? "form-control invalid"
        : "form-control";

    return (
        <form onSubmit={submissionHandler}>
            <div className="control-group">
                <div className={firstNameInputClasses}>
                    <label htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        id="firstName"
                        onChange={firstNameInputChangeHandler}
                        onBlur={firstNameInputBlurHandler}
                        value={enteredFirstName}
                    />
                    {firstNameHasError && (
                        <p className="error-text">Enter a valid First Name</p>
                    )}
                </div>
                <div className={lastNameInputClasses}>
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        id="lastName"
                        onChange={lastNameInputChangeHandler}
                        onBlur={lastNameInputBlurHandler}
                        value={enteredLastName}
                    />
                    {lastNameHasError && (
                        <p className="error-text">Enter a valid Last Name</p>
                    )}
                </div>
            </div>
            <div className={emailInputClasses}>
                <label htmlFor="email">E-Mail Address</label>
                <input
                    type="email"
                    id="email"
                    onChange={emailInputChangeHandler}
                    onBlur={emailInputBlurHandler}
                    value={enteredEmail}
                />
                {emailHasError && (
                    <p className="error-text">Enter a valid Email</p>
                )}
            </div>
            <div className="form-actions">
                <button disabled={!isFormValid}>Submit</button>
            </div>
        </form>
    );
};

export default BasicForm;
