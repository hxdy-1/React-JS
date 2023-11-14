import React from "react";
import Button from "../utils/Button";
// import SelectedProject from "./SelectedProject";

const Sidebar = ({
	onStartAddProject,
	projects,
	onSelectProject,
	selectedProjectId,
}) => {
	return (
		<aside className="w-1/3 bg-stone-900 px-8 py-16 text-stone-100 md:w-72 rounded-r-xl">
			<h2 className="mb-8 text-stone-200 uppercase font-bold text-xl">
				Your Projects
			</h2>
			<div>
				<Button onClick={onStartAddProject}>+ Add Project</Button>
			</div>
			<ul className="mt-8">
				{projects.map((project) => {
					let stylings =
						"w-full text-left px-4 py-2 my-1 rounded-md hover:bg-stone-800 hover:text-stone-200 font-bold";

					if (project.id === selectedProjectId) {
						stylings += " bg-stone-800 text-stone-200";
					} else {
						stylings += " text-stone-400";
					}

					console.log(stylings);
					console.log(String(stylings));
					return (
						<li key={project.id}>
							<button
								onClick={() => onSelectProject(project.id)}
								className={stylings}
							>
								{project.title}
							</button>
						</li>
					);
				})}
			</ul>
		</aside>
	);
};

export default Sidebar;
