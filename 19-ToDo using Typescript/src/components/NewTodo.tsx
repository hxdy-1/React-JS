import React, { FC, useContext, useState } from "react";
import styles from "./NewTodo.module.css";
import { TodosContext } from "../store/todo-context";

const NewTodo: FC = () => {
	const todoCtx = useContext(TodosContext);
	const [enteredText, setEnteredText] = useState("");

	const submitHandler = (e: React.FormEvent) => {
		e.preventDefault();

		if (enteredText.trim().length === 0) return;

		todoCtx.addTodo(enteredText);

		setEnteredText("");
	};

	const textChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEnteredText(e.target.value);
	};

	return (
		<form className={styles.form} onSubmit={submitHandler}>
			<label htmlFor="text"></label>
			<input
				type="text"
				id="text"
				value={enteredText}
				onChange={textChangeHandler}
			/>
			<button type="submit">Add todo</button>
		</form>
	);
};

export default NewTodo;
