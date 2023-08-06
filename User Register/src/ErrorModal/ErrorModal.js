import styles from "./ErrorModal.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ReactDOM from "react-dom";

const Backdrop = (props) => (
    <div className={styles.backdrop} onClick={props.onDismiss}></div>
);

const Modal = (props) => (
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
);

const ErrorModal = (props) => (
    <>
        {ReactDOM.createPortal(
            <Backdrop onDismiss={props.onDismiss} />,
            document.getElementById("backdrop-root")
        )}
        {ReactDOM.createPortal(
            <Modal error={props.error} onDismiss={props.onDismiss} />,
            document.getElementById("modal-root")
        )}
    </>
);

export default ErrorModal;
