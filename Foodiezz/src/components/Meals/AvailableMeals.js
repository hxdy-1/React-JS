import Card from "../UI/Card";
import styles from "./AvailableMeals.module.css";
import MealItem from "./MealItem";

const DUMMY_MEALS = [
    {
        id: "m1",
        name: "Sushi",
        description: "Finest fish and veggies",
        price: 229.9,
    },
    {
        id: "m2",
        name: "Schnitzel",
        description: "A german specialty!",
        price: 165.5,
    },
    {
        id: "m3",
        name: "Barbecue Burger",
        description: "American, raw, meaty",
        price: 129.9,
    },
    {
        id: "m4",
        name: "Green Bowl",
        description: "Healthy...and green...",
        price: 189.9,
    },
];

const AvailableMeals = () => {
    const DummyMealsArr = DUMMY_MEALS.map((meal) => (
        <MealItem
            id={meal.id}
            key={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
        />
    ));
    return (
        <section className={styles.meals}>
            <Card>
                <ul>{DummyMealsArr}</ul>
            </Card>
        </section>
    );
};

export default AvailableMeals;
