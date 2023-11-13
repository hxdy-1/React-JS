import React from "react";

const SelectedProject = ({ project, onDelete }) => {
	const formattedDate = new Date(project.dueDate).toLocaleString("en-US", {
		year: "numeric",
		month: "short",
		day: "numeric",
	});

	return (
		<div className="w-[35rem] mt-16">
			<header className="pb-4 mb-4 border-b-2 border-stone-300">
				<div className="flex justify-between items-center">
					<h1 className="text-3xl font-bold text-stone-600 mb-2">
						{project.title}
					</h1>
					<button
						onClick={() => {
							const proceed = confirm(
								"Do you want to delete this project?"
							);

							if (!proceed) return;

							onDelete();
						}}
						className="text-stone-600 hover:text-stone-950 font-bold px-4 py-2 hover:bg-stone-100 rounded-md"
					>
						Delete
					</button>
				</div>
				<p className="text-stone-400 mb-4">{formattedDate}</p>
				<p className="text-stone-600 whitespace-pre-wrap">
					{project.description}
				</p>
			</header>
			TASKS
		</div>
	);
};

export default SelectedProject;
