import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";

export const fetchCartData = () => {
	return async (dispatch) => {
		const fetchData = async () => {
			const response = await fetch(
				"https://redux-cart-8b606-default-rtdb.firebaseio.com/cart.json"
			);

			if (!response.ok) {
				throw new Error("Couldn't fetch the cart data :(");
			}

			const data = await response.json();

			return data;
		};

		try {
			const cartData = await fetchData();

			dispatch(
				// cartActions.replaceCart(cartData)
				cartActions.replaceCart({
					itemsArr: cartData.itemsArr || [],
					totalQuantity: cartData.totalQuantity,
				})
			);
		} catch (error) {
			dispatch(
				uiActions.showNotification({
					status: "error",
					title: "Error",
					message: "Fetching cart data failed :(",
				})
			);
		}
	};
};

export const sendCartData = (cart) => {
	return async (dispatch) => {
		dispatch(
			uiActions.showNotification({
				status: "pending",
				title: "Sending...",
				message: "Sending cart data...!",
			})
		);

		const sendRequest = async () => {
			const response = await fetch(
				"https://redux-cart-8b606-default-rtdb.firebaseio.com/cart.json",
				{
					method: "PUT",
					body: JSON.stringify({
						itemsArr: cart.itemsArr,
						totalQuantity: cart.totalQuantity,
					}),
				}
			);

			if (!response.ok) {
				throw new Error("Failed to fetch");
			}
		};
		try {
			await sendRequest();

			dispatch(
				uiActions.showNotification({
					status: "success",
					title: "Success!!!",
					message: "Successfully sent the cart data :)",
				})
			);
		} catch (error) {
			dispatch(
				uiActions.showNotification({
					status: "error",
					title: "Error",
					message: "Sending cart data failed :(",
				})
			);
		}
	};
};
