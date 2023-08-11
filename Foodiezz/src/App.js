import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
    const [isCartVisible, setISCartVisible] = useState(false);

    const showCartHandler = (e) => {
        console.log("cart opened");
        setISCartVisible(true);
    };

    const hideCartHanndler = (e) => {
        setISCartVisible(false);
        console.log("cart closed");
    };

    return (
        <>
            {isCartVisible && <Cart onHideCart={hideCartHanndler} />}
            <Header onShowCart={showCartHandler} />
            <main>
                <Meals />
            </main>
        </>
    );
}

export default App;
