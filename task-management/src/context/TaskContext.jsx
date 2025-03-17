import { createContext, useState } from "react";

export const TaskContext = createContext();
export const TaskProvider = ({ Children }) => {
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => setTasks([...tasks, task]);
    const updateTask = (updatedTask) => {
        setTasks(tasks.map((task) => (task.id == updatedTask.id ? updatedTask : task)));
    };
    const deleteTask = (taskId) => {
        setTasks(tasks.filter((task) => task.id !== taskId));
    };

    return (
        <TaskContext.Provider value={{ tasks, addTask, updateTask, deleteTask }}>
            {Children}
        </TaskContext.Provider>
    );
};