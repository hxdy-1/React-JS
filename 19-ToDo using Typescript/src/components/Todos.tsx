import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import styles from "./Todos.module.css";
import { TodosContext } from "../store/todo-context";

const Todos: React.FC = () => {
	const todoCtx = useContext(TodosContext);
	return (
		<ul className={styles.todos}>
			{todoCtx.items.map((todo) => (
				<TodoItem
					key={todo.id}
					text={todo.text}
					onRemoveTodo={todoCtx.removeTodo.bind(null, todo.id)}
				/>
			))}
		</ul>
	);
};

export default Todos;
