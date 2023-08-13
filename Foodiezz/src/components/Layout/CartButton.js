import { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import styles from "./CartButton.module.css";
import CartContext from "../../store/cart-context";

const CartButton = (props) => {
    const cartCtx = useContext(CartContext);
    console.log(cartCtx);

    const numOfCartItems = cartCtx.item.reduce(
        (curNum, item) => curNum + item.amount,
        0
    );
    return (
        <button className={styles.button} onClick={props.onClick}>
            <span className={styles.icon}>
                <CartIcon />
            </span>
            <span>Cart</span>
            <span className={styles.badge}>{numOfCartItems}</span>
        </button>
    );
};

export default CartButton;
