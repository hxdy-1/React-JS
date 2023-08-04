import React, { useState } from "react";
import styles from "./UserInputs.module.css";

const initUserInputs = {
    "current-savings": 1000,
    "yearly-contribution": 1200,
    "expected-return": 5,
    duration: 5,
};

const UserInputs = (props) => {
    const [userInputs, setUserInputs] = useState(initUserInputs);

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("submit");

        props.onSubmission(userInputs);
    };

    const resetHandler = (e) => {
        console.log("reset");
        setUserInputs(initUserInputs);
    };

    const inputChangeHandler = (input, value) => {
        console.log(input, value);
        setUserInputs((prev) => {
            return {
                ...prev,
                [input]: +value,
            };
        });
    };

    return (
        <form onSubmit={submitHandler} className={styles.form}>
            <div className={styles["input-group"]}>
                <p>
                    <label htmlFor="current-savings">
                        Current Savings (&#8377;)
                    </label>
                    <input
                        value={userInputs["current-savings"]}
                        onChange={(e) =>
                            inputChangeHandler(
                                "current-savings",
                                e.target.value
                            )
                        }
                        type="number"
                        id="current-savings"
                    />
                </p>
                <p>
                    <label htmlFor="yearly-contribution">
                        Yearly Savings (&#8377;)
                    </label>
                    <input
                        value={userInputs["yearly-contribution"]}
                        onChange={(e) =>
                            inputChangeHandler(
                                "yearly-contribution",
                                e.target.value
                            )
                        }
                        type="number"
                        id="yearly-contribution"
                    />
                </p>
            </div>
            <div className={styles["input-group"]}>
                <p>
                    <label htmlFor="expected-return">
                        Expected Interest (%, per year)
                    </label>
                    <input
                        value={userInputs["expected-return"]}
                        onChange={(e) =>
                            inputChangeHandler(
                                "expected-return",
                                e.target.value
                            )
                        }
                        type="number"
                        id="expected-return"
                    />
                </p>
                <p>
                    <label htmlFor="duration">
                        Investment Duration (years)
                    </label>
                    <input
                        value={userInputs["duration"]}
                        onChange={(e) =>
                            inputChangeHandler("duration", e.target.value)
                        }
                        type="number"
                        id="duration"
                    />
                </p>
            </div>
            <p className={styles.actions}>
                <button
                    onClick={resetHandler}
                    type="reset"
                    className={styles.buttonAlt}
                >
                    Reset
                </button>
                <button type="submit" className={styles.button}>
                    Calculate
                </button>
            </p>
        </form>
    );
};

export default UserInputs;
