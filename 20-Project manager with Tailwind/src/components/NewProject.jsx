import React, { useRef } from "react";
import Input from "../utils/Input";
import Modal from "../utils/Modal";

const NewProject = ({ addProject, cancelAddProject }) => {
	const modalRef = useRef();

	const titleRef = useRef();
	const descriptionRef = useRef();
	const dueDateRef = useRef();

	const handleSave = () => {
		const enteredTitle = titleRef.current.value;
		const enteredDescription = descriptionRef.current.value;
		const enteredDueDate = dueDateRef.current.value;

		// Validations...
		if (
			enteredTitle.trim() === "" ||
			enteredDescription.trim() === "" ||
			enteredDueDate.trim() === ""
		) {
			// modal
			modalRef.current.open();
			return;
		}

		addProject({
			title: enteredTitle,
			description: enteredDescription,
			dueDate: enteredDueDate,
		});
	};

	return (
		<>
			<Modal ref={modalRef} buttonTxt="Okay">
				<h2 className="font-bold text-stone-800 text-xl my-4">
					Invalid Inputs
				</h2>
				<p className="text-stone-600 mb-4">
					Looks like you left atleast one input empty...
				</p>
				<p className="text-stone-600 mb-4">
					Please make sure to provide valid values for every input
					field
				</p>
			</Modal>
			<div className="w-[35rem] mt-16">
				<menu className="flex items-center justify-end gap-4 my-4">
					<li>
						<button
							onClick={cancelAddProject}
							className="px-4 py-2 rounded-md text-stone-800 hover:bg-stone-200 font-bold"
						>
							Cancel
						</button>
					</li>
					<li>
						<button
							onClick={handleSave}
							className="px-6 py-2 rounded-md bg-stone-800 hover:bg-stone-950 text-stone-50 font-bold"
						>
							Save
						</button>
					</li>
				</menu>
				<div>
					<Input type="text" ref={titleRef} label="Title" />
					<Input ref={descriptionRef} label="Description" textArea />
					<Input type="date" ref={dueDateRef} label="Due date" />
				</div>
			</div>
		</>
	);
};

export default NewProject;
