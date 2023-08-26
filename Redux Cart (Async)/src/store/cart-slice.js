import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const cartSlice = createSlice({
	name: "cart",
	initialState: {
		itemsArr: [],
		totalQuantity: 0,
		changed: false,
	},
	reducers: {
		replaceCart(state, action) {
			state.totalQuantity = action.payload.totalQuantity;
			state.itemsArr = action.payload.itemsArr;
		},
		addToCart(state, action) {
			const newItem = action.payload;

			const existingItem = state.itemsArr.find(
				(item) => item.id === newItem.id
			);

			state.totalQuantity++;
			state.changed = true;

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
			state.changed = true;
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
