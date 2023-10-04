import { Link, Outlet, useNavigate, useParams } from "react-router-dom";

import Header from "../Header.jsx";
import { useMutation, useQuery } from "@tanstack/react-query";
import { deleteEvent, fetchEvent, queryClient } from "../../util/http.js";
import LoadingIndicator from "../UI/LoadingIndicator.jsx";
import ErrorBlock from "../UI/ErrorBlock.jsx";
import { useState } from "react";
import Modal from "../UI/Modal.jsx";

export default function EventDetails() {
	const [isDeleting, setIsDeleting] = useState(false);
	const { id } = useParams();
	const navigate = useNavigate();

	const { data, isError, isPending, error } = useQuery({
		queryKey: ["events", id],
		queryFn: ({ signal }) => fetchEvent({ signal, id }),
	});

	const {
		mutate,
		isPending: isDeletionPending,
		isError: isDeletionGotError,
		error: deletionError,
	} = useMutation({
		mutationFn: deleteEvent,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["events"],
				refetchType: "none",
			});
			navigate("/events");
		},
	});

	const startDeletion = () => {
		setIsDeleting(true);
	};

	const stopDeletion = () => {
		setIsDeleting(false);
	};

	const deleteHandler = () => {
		mutate({ id });
	};
	// console.log(data);

	let content;

	if (isPending) {
		content = (
			<div id="event-details-content" className="center">
				<p>Loading event details...</p>
				<LoadingIndicator />
			</div>
		);
	}

	if (isError) {
		content = (
			<div id="event-details-content" className="center">
				<ErrorBlock
					title="Failed to load event"
					message={error.info?.message || "Please try again later"}
				/>
			</div>
		);
	}

	if (data) {
		const fullDate = new Date(data?.date).toLocaleDateString("en-US", {
			day: "numeric",
			month: "short",
			year: "numeric",
		});

		content = (
			<>
				<header>
					<h1>{data?.title}</h1>
					<nav>
						<button onClick={startDeletion}>Delete</button>
						<Link to="edit">Edit</Link>
					</nav>
				</header>
				<div id="event-details-content">
					<img
						src={`http://localhost:3000/${data?.image}`}
						alt={data?.title}
					/>
					<div id="event-details-info">
						<div>
							<p id="event-details-location">{data?.location}</p>
							<time dateTime={`Todo-DateT$Todo-Time`}>
								{`${fullDate} @${data?.time}`}
							</time>
						</div>
						<p id="event-details-description">
							{data?.description}
						</p>
					</div>
				</div>
			</>
		);
	}

	return (
		<>
			{isDeleting && (
				<Modal onClose={stopDeletion}>
					<h2>Are you sure?</h2>
					<p>Deletion can't be undone!</p>
					<div className="form-actions">
						{isDeletionPending && <LoadingIndicator />}
						{!isDeletionPending && (
							<>
								<button
									onClick={stopDeletion}
									className="button-text"
								>
									Cancel
								</button>
								<button
									onClick={deleteHandler}
									className="button"
								>
									Delete
								</button>
							</>
						)}
					</div>
					{isDeletionGotError && (
						<ErrorBlock
							title="Failed to delete the event"
							message={
								deletionError.info?.message || "Try again later"
							}
						/>
					)}
				</Modal>
			)}
			<Outlet />
			<Header>
				<Link to="/events" className="nav-item">
					View all Events
				</Link>
			</Header>
			<article id="event-details">{content}</article>
		</>
	);
}
