import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
    const [title, setTitle] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(title);
        setTitle('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="New Task" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
            />
            <button type="submit">Add Task</button>
        </form>
    );
};

export default TaskForm;
