import styles from "./ErrorModal.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";

const ErrorModal = (props) => (
    <div>
        <div className={styles.backdrop} onClick={props.onDismiss}></div>
        <Card className={styles.modal}>
            <header className={styles.header}>
                <h2>{props.error.title}</h2>
            </header>
            <div className={styles.content}>
                <p>{props.error.message}</p>
            </div>
            <footer className={styles.actions}>
                <Button onClick={props.onDismiss}>Okay!</Button>
            </footer>
        </Card>
    </div>
);

export default ErrorModal;
