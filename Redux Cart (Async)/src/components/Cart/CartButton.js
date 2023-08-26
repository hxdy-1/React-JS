import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
	const dispatcher = useDispatch();
	const cartQuantity = useSelector((state) => state.cart.totalQuantity);

	const toggleCartHandler = (e) => {
		dispatcher(uiActions.toggler());
	};

	return (
		<button className={classes.button} onClick={toggleCartHandler}>
			<span>My Cart</span>
			<span className={classes.badge}>{cartQuantity}</span>
		</button>
	);
};

export default CartButton;
