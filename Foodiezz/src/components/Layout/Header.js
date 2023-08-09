import styles from "./Header.module.css";
import mealsImg from "../../assets/meals.jpg";
import CartButton from "./CartButton";

const Header = () => (
    <>
        <header className={styles.header}>
            <h1>Foodiezz</h1>
            <CartButton />
        </header>
        <div className={styles["main-image"]}>
            <img src={mealsImg} alt="an image of dining table" />
        </div>
    </>
);

export default Header;
