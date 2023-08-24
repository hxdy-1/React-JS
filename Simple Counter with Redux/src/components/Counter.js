import classes from "./Counter.module.css";
import { counterActions } from "../store/redux";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
	const counter = useSelector((state) => state.counter.counter);
	const show = useSelector((state) => state.counter.showCounter);
	const dispatcher = useDispatch();

	const incrementHandler = () => {
		dispatcher(counterActions.increment());
	};

	const decrementHandler = () => {
		dispatcher(counterActions.decrement());
	};

	const increaseHandler = () => {
		dispatcher(counterActions.increase(10));
	};

	const toggleCounterHandler = () => {
		dispatcher(counterActions.toggle());
	};

	return (
		<main className={classes.counter}>
			<h1>Redux Counter</h1>
			{!show && <div className={classes.value}>{counter}</div>}
			{show && <div className={classes.value}>&uarr; Counter &darr;</div>}
			<div>
				<button onClick={incrementHandler}>&uarr; Increment</button>
				<button onClick={increaseHandler}>
					&uarr; Increase by 10 &uarr;
				</button>
				<button onClick={decrementHandler}>&darr; Decrement</button>
			</div>
			<button onClick={toggleCounterHandler}>Toggle Counter</button>
		</main>
	);
};

export default Counter;
