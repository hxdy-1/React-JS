import "./ExpensesList.css";
import ExpenseItems from "./ExpensItems";

const ExpensesList = (props) => {
    if (props.items.length === 0) {
        return <h1 className="expenses-list__fallback">No items found :(</h1>;
    }

    return (
        <ul className="expenses-list">
            {props.items.map((expenses) => (
                <ExpenseItems key={expenses.id} expense={expenses} />
            ))}
        </ul>
    );
};

export default ExpensesList;
