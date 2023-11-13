import { FC, createContext, useState } from "react";
import Todo from "../models/todo";

type TodosContextObj = {
	items: Todo[];
	addTodo: (text: string) => void;
	removeTodo: (id: string) => void;
};

export const TodosContext = createContext<TodosContextObj>({
	items: [],
	addTodo: (text: string) => {},
	removeTodo: (id: string) => {},
});

const TodosContextProvider: FC = (props) => {
	const [todos, setTodos] = useState<Todo[]>([]);

	const addTodoHandler = (todoText: string) => {
		const newTodos = new Todo(todoText);

		setTodos((prev) => prev.concat(newTodos));
	};

	const todoRemoveHandler = (todoId: string) => {
		setTodos((prev) => prev.filter((todo) => todo.id !== todoId));
	};

	const contextValue: TodosContextObj = {
		items: todos,
		addTodo: addTodoHandler,
		removeTodo: todoRemoveHandler,
	};

	return (
		<TodosContext.Provider value={contextValue}>
			{props.children}
		</TodosContext.Provider>
	);
};

export default TodosContextProvider;
