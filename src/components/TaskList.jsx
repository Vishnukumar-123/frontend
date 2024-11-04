import React, { useState } from 'react';
import TaskForm from './TaskForm';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    const addTask = (title) => {
        setTasks([...tasks, { title }]);
    };

    return (
        <div className="container">
            <h2>Task List</h2>
            <TaskForm addTask={addTask} />
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>{task.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
