import React, { useState } from "react";
import Card from "./UI/Card";
import AddUser from "./Components/addUser";
import UsersList from "./Components/usersList";

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
        <div>
            <AddUser onAdd={addUserHandler} />
            {usersList.length > 0 && <UsersList users={usersList} />}
        </div>
    );
}

export default App;
