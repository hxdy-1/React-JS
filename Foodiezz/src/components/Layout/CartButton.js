import { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import styles from "./CartButton.module.css";
import CartContext from "../../store/cart-context";

const CartButton = (props) => {
    const [isBtnBumping, setIsBtnBumping] = useState(false);
    const cartCtx = useContext(CartContext);
    // console.log(cartCtx);
    // const { items } = cartCtx;

    const numOfCartItems = cartCtx.items.reduce(
        (curNum, item) => curNum + item.amount,
        0
    );

    const btnClasses = `${styles.button}  ${isBtnBumping ? styles.bump : ""}`;

    useEffect(() => {
        if (cartCtx.items.length === 0) return;
        setIsBtnBumping(true);

        const timer = setTimeout(() => {
            setIsBtnBumping(false);
        }, 150);

        return () => {
            clearTimeout(timer);
        };
    }, [cartCtx.items]);

    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span className={styles.icon}>
                <CartIcon />
            </span>
            <span>Cart</span>
            <span className={styles.badge}>{numOfCartItems}</span>
        </button>
    );
};

export default CartButton;
