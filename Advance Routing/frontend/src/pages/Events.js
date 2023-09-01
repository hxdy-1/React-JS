import { Link } from "react-router-dom";

const DUMMY_EVENTS = [
	{ id: "e1", title: "An event" },
	{ id: "e2", title: "Another event" },
	{ id: "e3", title: "Any 3rd event" },
];

const EventsPage = () => {
	return (
		<>
			<h1>Events page</h1>
			<ul>
				{DUMMY_EVENTS.map((event) => (
					<li>
						<Link to={event.id}>{event.title}</Link>
					</li>
				))}
			</ul>
		</>
	);
};

export default EventsPage;
