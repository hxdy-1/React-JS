// import Card from "../UI/Card";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import styles from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";

const Cart = (props) => {
    const cartCtx = useContext(CartContext);

    const totalAmount = `₹${cartCtx.totalAmount.toFixed(2)}`;

    const hasItems = cartCtx.items.length > 0;

    const cartItemAddHandler = (item) => {};
    const cartItemRemoveHandler = (id) => {};

    const cartItems = (
        <ul className={styles["cart-items"]}>
            {cartCtx.items.map((item) => (
                <CartItem
                    key={item.id}
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                    onAdd={cartItemAddHandler}
                    onRemove={cartItemRemoveHandler}
                />
            ))}
        </ul>
    );
    return (
        <Modal onClose={props.onHideCart}>
            {cartItems}
            <div className={styles.total}>
                <span>Total</span>
                <span>{totalAmount}</span>
            </div>
            <div className={styles.actions}>
                <button
                    className={styles["button--alt"]}
                    onClick={props.onHideCart}
                >
                    Cancel
                </button>
                {hasItems && <button className={styles.button}>Order</button>}
            </div>
        </Modal>
    );
};

export default Cart;
