import { Link, useNavigate, useParams } from "react-router-dom";

import Modal from "../UI/Modal.jsx";
import EventForm from "./EventForm.jsx";
import { useMutation, useQuery } from "@tanstack/react-query";
import { fetchEvent, updateEvent, queryClient } from "../../util/http.js";
import LoadingIndicator from "../UI/LoadingIndicator.jsx";
import ErrorBlock from "../UI/ErrorBlock.jsx";

export default function EditEvent() {
	const navigate = useNavigate();
	const { id } = useParams();

	const { data, isError, isPending, error } = useQuery({
		queryKey: ["events", id],
		queryFn: ({ signal }) => fetchEvent({ id, signal }),
	});

	const {
		mutate,
		isPending: isUpdatingPending,
		isError: isUpdatingGotError,
		error: updatingError,
	} = useMutation({
		mutationFn: updateEvent,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["events"],
			});
			navigate("../");
		},
	});

	function handleSubmit(formData) {
		mutate({ id, event: formData });
	}

	function handleClose() {
		navigate("../");
	}

	let content;

	if (isPending) {
		content = (
			<div className="center">
				<LoadingIndicator />
			</div>
		);
	}

	if (isError) {
		content = (
			<>
				<ErrorBlock
					title="Failed to load event details"
					message={error.info?.message || "Please check your inputs"}
				/>
				<div className="form-actions">
					<Link to="../" className="button">
						Okay
					</Link>
				</div>
			</>
		);
	}

	if (data) {
		content = (
			<EventForm inputData={data} onSubmit={handleSubmit}>
				{isUpdatingPending && "Updating..."}
				{isUpdatingGotError && (
					<ErrorBlock
						title="Failed to update the event"
						message="Please check your inputs"
					/>
				)}
				{!isUpdatingPending && !isUpdatingGotError && (
					<>
						<Link to="../" className="button-text">
							Cancel
						</Link>
						<button type="submit" className="button">
							Update
						</button>
					</>
				)}
			</EventForm>
		);
	}

	return <Modal onClose={handleClose}>{content}</Modal>;
}
