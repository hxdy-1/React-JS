import React, { useState } from "react";

const NewTasks = ({ onAdd }) => {
	const [enteredTask, setEnteredTask] = useState("");

	const handleChange = (e) => {
		setEnteredTask(e.target.value);
	};

	const handleClick = () => {
		onAdd(enteredTask);
		setEnteredTask("");
	};

	return (
		<div className="flex items-center gap-4">
			<input
				value={enteredTask}
				onChange={handleChange}
				type="text"
				className="w-64 py-2 px-4 rounded-md bg-stone-200 hover:bg-stone-300"
			/>
			<button
				onClick={handleClick}
				className="py-2 px-4 bg-stone-400 hover:bg-stone-800 rounded-md text-stone-600 hover:text-stone-200 font-bold"
			>
				+ Add Task
			</button>
		</div>
	);
};

export default NewTasks;
