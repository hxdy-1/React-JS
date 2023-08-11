import CartIcon from "../Cart/CartIcon";
import styles from "./CartButton.module.css";

const CartButton = (props) => {
    return (
        <button className={styles.button} onClick={props.onClick}>
            <span className={styles.icon}>
                <CartIcon />
            </span>
            <span>Cart</span>
            <span className={styles.badge}>3</span>
        </button>
    );
};

export default CartButton;
