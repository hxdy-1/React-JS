// import image from "../assets/calendar-event-left-svgrepo-com.svg";
// import image from "../assets/people-who-support-svgrepo-com.svg";
// import image from "../assets/booking_schedule_isometric_illustration-05.jpg";
import image from "../assets/booking_schedule_isometric_illustration-05-removebg-preview.png";
import classes from "./HomePageImage.module.css";

const HomePageImage = () => {
	return (
		<div className={classes.container}>
			<img src={image} alt="events image"></img>
		</div>
	);
};

export default HomePageImage;
