import "./ExpensesList.css";
import ExpenseItems from "./ExpensItems";

const ExpensesList = (props) => {
    // let expensesContent = <p>No expenses found for this year</p>;

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
