import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const cartSlice = createSlice({
	name: "cart",
	initialState: {
		itemsArr: [],
		totalQuantity: 0,
	},
	reducers: {
		addToCart(state, action) {
			const newItem = action.payload;

			const existingItem = state.itemsArr.find(
				(item) => item.id === newItem.id
			);

			state.totalQuantity++;

			if (!existingItem) {
				state.itemsArr.push({
					id: newItem.id,
					price: newItem.price,
					totalPrice: newItem.price,
					quantity: 1,
					name: newItem.title,
				});
			} else {
				existingItem.quantity++;
				existingItem.totalPrice =
					existingItem.totalPrice + newItem.price;
			}
		},
		removeFromCart(state, action) {
			const id = action.payload;
			const existingItem = state.itemsArr.find((item) => item.id === id);
			state.totalQuantity--;
			if (existingItem.quantity === 1) {
				state.itemsArr = state.itemsArr.filter(
					(item) => item.id !== id
				);
			} else {
				existingItem.quantity--;
				existingItem.totalPrice =
					existingItem.totalPrice - existingItem.price;
			}
		},
	},
});

export const cartActions = cartSlice.actions;

export default cartSlice;
