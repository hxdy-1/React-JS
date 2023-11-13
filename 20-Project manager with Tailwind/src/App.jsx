import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import Sidebar from "./components/Sidebar";
import SelectedProject from "./components/SelectedProject";

function App() {
	const [projectsState, setProjectsState] = useState({
		selectedProjectId: undefined,
		projects: [],
	});

	const handleStartAddProject = () => {
		setProjectsState((prevState) => {
			return {
				...prevState,
				selectedProjectId: null,
			};
		});
	};

	const handleSelectProject = (id) => {
		setProjectsState((prevState) => {
			return {
				...prevState,
				selectedProjectId: id,
			};
		});
	};

	const handleCancelAddProject = () => {
		setProjectsState((prevState) => {
			return {
				...prevState,
				selectedProjectId: undefined,
			};
		});
	};

	const handleAddProject = (projectDetails) => {
		setProjectsState((prevState) => {
			const newProject = {
				...projectDetails,
				id: Math.random(),
			};

			return {
				...prevState,
				selectedProjectId: undefined,
				projects: [...prevState.projects, newProject],
			};
		});
	};

	// handle deletion:

	const handleDelete = () => {
		setProjectsState((prevState) => {
			return {
				...prevState,
				selectedProjectId: undefined,
				projects: prevState.projects.filter(
					(project) => project.id !== prevState.selectedProjectId
				),
			};
		});
	};

	const selectedProject = projectsState.projects.find(
		(project) => project.id === projectsState.selectedProjectId
	);

	console.log(selectedProject);

	let content = (
		<SelectedProject project={selectedProject} onDelete={handleDelete} />
	);

	if (projectsState.selectedProjectId === null) {
		content = (
			<NewProject
				addProject={handleAddProject}
				cancelAddProject={handleCancelAddProject}
			/>
		);
	} else if (projectsState.selectedProjectId === undefined) {
		content = (
			<NoProjectSelected onStartAddProject={handleStartAddProject} />
		);
	}

	return (
		<main className="h-screen my-8 flex gap-8">
			<Sidebar
				onStartAddProject={handleStartAddProject}
				projects={projectsState.projects}
				onSelectProject={handleSelectProject}
				selectedProjectId={projectsState.selectedProjectId}
			/>
			{content}
		</main>
	);
}

export default App;
