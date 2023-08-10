import Card from "../UI/Card";
import styles from "./Cart.module.css";

const Cart = (props) => {
    const cartItems = (
        <ul className={styles["cart-items"]}>
            {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map(
                (item) => (
                    <li>{item.name}</li>
                )
            )}
        </ul>
    );
    return (
        <Card>
            {cartItems}
            <div className={styles.total}>
                <span>Total</span>
                <span>34.87</span>
            </div>
            <div className={styles.actions}>
                <button className={styles["button--alt"]}>Cancel</button>
                <button className={styles.button}>Order</button>
            </div>
        </Card>
    );
};

export default Cart;
