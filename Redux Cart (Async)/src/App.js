import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { uiActions } from "./store/ui-slice";
import Notification from "./components/UI/Notification";

let isInitial = true;

function App() {
	const dispatcher = useDispatch();
	const showCart = useSelector((state) => state.ui.isCartShown);
	const cart = useSelector((state) => state.cart);
	const notification = useSelector((state) => state.ui.notification);

	// console.log(notification);

	useEffect(() => {
		const sendCartData = async () => {
			dispatcher(
				uiActions.showNotification({
					status: "pending",
					title: "Sending...",
					message: "Sending cart data...!",
				})
			);
			// console.log(notification);
			const response = await fetch(
				"https://redux-cart-8b606-default-rtdb.firebaseio.com/cart.json",
				{
					method: "PUT",
					body: JSON.stringify(cart),
				}
			);

			if (!response.ok) {
				throw new Error("Failed to fetch");
			}

			dispatcher(
				uiActions.showNotification({
					status: "success",
					title: "Success!!!",
					message: "Successfully sent the cart data :)",
				})
			);
			// console.log(notification);
		};

		if (isInitial) {
			isInitial = false;
			return;
		}

		sendCartData().catch((error) => {
			dispatcher(
				uiActions.showNotification({
					status: "error",
					title: "Error",
					message: "Sending cart data failed :(",
				})
			);
			// console.log(notification);
		});
	}, [cart, dispatcher]);

	return (
		<Fragment>
			{notification && (
				<Notification
					status={notification.status}
					title={notification.title}
					message={notification.message}
				/>
			)}
			<Layout>
				{showCart && <Cart />}
				<Products />
			</Layout>
		</Fragment>
	);
}

export default App;
