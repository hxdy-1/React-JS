import { useState } from "react";

const useInput = (validatorFn) => {
    const [enteredValue, setEnteredValue] = useState("");
    const [isTouched, setIsTouched] = useState(false);

    const valueIsValid = validatorFn(enteredValue);
    const hasError = !valueIsValid && isTouched;

    const InputChangeHandler = (e) => {
        setEnteredValue(e.target.value);
    };

    const InputBlurHandler = (e) => {
        setIsTouched(true);
    };

    const reset = () => {
        setEnteredValue("");
        setIsTouched(false);
    };

    return {
        value: enteredValue,
        hasError,
        isValid: valueIsValid,
        InputChangeHandler,
        InputBlurHandler,
        reset,
    };
};

export default useInput;
