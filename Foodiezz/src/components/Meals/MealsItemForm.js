import { useRef, useState } from "react";
import Input from "../UI/Input";
import styles from "./MealsItemForm.module.css";

const MealsItemForm = (props) => {
    const [isAmountValid, setIsAmountValid] = useState(true);

    const amountInputRef = useRef();

    const submitHandler = (e) => {
        e.preventDefault();

        const enteredAmount = amountInputRef.current.defaultValue;
        // const enteredAmountNum = +enteredAmount

        if (
            enteredAmount.trim().length === 0 ||
            +enteredAmount < 1 ||
            +enteredAmount > 5
        ) {
            setIsAmountValid(false);
            return;
        }

        props.onAddToCart(+enteredAmount);
    };

    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <Input
                ref={amountInputRef}
                label="Amount"
                input={{
                    id: "amount_" + props.id,
                    type: "number",
                    min: "1",
                    max: "10",
                    step: "1",
                    defaultValue: "1",
                }}
            />
            <button>+ Add</button>
            {!isAmountValid && <p>Please enter a valid amount (1-5).</p>}
        </form>
    );
};

export default MealsItemForm;
