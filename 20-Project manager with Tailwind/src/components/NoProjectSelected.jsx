import React from "react";
import project from "../assets/no-projects.png";
import Button from "../utils/Button";

const NoProjectSelected = ({ onStartAddProject }) => {
	return (
		<div className="w-2/3 mt-16 text-center">
			<img
				src={project}
				alt="An empty project list"
				className="object-contain w-16 h-16 mx-auto"
			/>
			<h2 className="font-bold text-stone-600 text-xl my-4">
				No Project Selected
			</h2>
			<p className="text-stone-400 mb-4">
				select or create a new project to get started with
			</p>
			<p className="mt-8">
				<Button onClick={onStartAddProject}>
					Create a new Project
				</Button>
			</p>
		</div>
	);
};

export default NoProjectSelected;
