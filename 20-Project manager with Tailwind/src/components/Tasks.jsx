import React from "react";
import NewTasks from "./NewTasks";

const Tasks = ({ onAdd, onDelete, tasks }) => {
	return (
		<section>
			<h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks:</h2>
			<NewTasks onAdd={onAdd} />
			{tasks.length === 0 && (
				<p className="text-stone-800 my-4 font-semibold">
					This project does'nt have any task yet.
				</p>
			)}
			{tasks.length > 0 && (
				<ul className="px-6 py-2 mt-4 rounded-md bg-stone-200">
					{tasks.map((task) => (
						<li
							key={task.id}
							className="flex items-center justify-between my-4 hover:bg-stone-300 rounded-md px-2 cursor-pointer"
						>
							<span className="font-bold">{task.text}</span>
							<button
								onClick={() => onDelete(task.id)}
								className="text-stone-600 hover:text-red-500 font-bold px-4 py-2 rounded-md"
							>
								Clear
							</button>
						</li>
					))}
				</ul>
			)}
		</section>
	);
};

export default Tasks;
