import React, { useState } from "react";
import AddUser from "./Components/AddUser";
import UsersList from "./Components/UsersList";

function App() {
    const [usersList, setUsersList] = useState([]);

    const addUserHandler = (userName, userAge) => {
        setUsersList((prev) => {
            return [
                ...prev,
                { name: userName, age: userAge, id: Math.random().toString() },
            ];
        });
    };

    return (
        <>
            <AddUser onAdd={addUserHandler} />
            {usersList.length > 0 && <UsersList users={usersList} />}
        </>
    );
}

export default App;
