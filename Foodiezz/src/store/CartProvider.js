// import Card from "../components/UI/Card";
import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
    items: [],
    totalAmount: 0,
};

const cartReducer = (state, action) => {
    if (action.type === "ADD_TO_CART") {
        const latestItems = state.items.concat(action.item);
        const latestTotalAmount =
            state.totalAmount + action.item.price * action.item.amount;

        return {
            items: latestItems,
            totalAmount: latestTotalAmount,
        };
    }
    if (action.type === "REMOVE_FROM_CART") return defaultCartState;
};

const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(
        cartReducer,
        defaultCartState
    );

    const addItemToCartHandler = (item) => {
        dispatchCartAction({ type: "ADD_TO_CART", item: item });
    };

    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({ type: "ADD_TO_CART", id: id });
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: +cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;
