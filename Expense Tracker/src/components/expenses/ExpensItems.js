import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItems.css";

function ExpenseItems(props) {
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.expense.date} />
            <div className="expense-item__description">
                <h2>{props.expense.title}</h2>
                <div className="expense-item__price">
                    ${props.expense.amount}
                </div>
            </div>
        </Card>
    );
}

export default ExpenseItems;
