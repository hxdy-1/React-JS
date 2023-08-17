import React, { useEffect, useState, useCallback } from "react";

import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";
import useHttp from "./hooks/use-http";

function App() {
    const [tasks, setTasks] = useState([]);

    const { isLoading, error, sendRequest: fetchTasks } = useHttp();

    useEffect(() => {
        const transformTasks = (transformObj) => {
            const loadedTasks = [];

            for (const taskKey in transformObj) {
                loadedTasks.push({
                    id: taskKey,
                    text: transformObj[taskKey].text,
                });
            }

            setTasks(loadedTasks);
        };

        fetchTasks(
            {
                url: "https://task-app-b00fc-default-rtdb.firebaseio.com/tasks.json",
            },
            transformTasks
        );
    }, []);

    const taskAddHandler = (task) => {
        setTasks((prevTasks) => prevTasks.concat(task));
    };

    return (
        <React.Fragment>
            <NewTask onAddTask={taskAddHandler} />
            <Tasks
                items={tasks}
                loading={isLoading}
                error={error}
                onFetch={fetchTasks}
            />
        </React.Fragment>
    );
}

export default App;
