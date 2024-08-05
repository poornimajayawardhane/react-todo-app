import React, { useState } from 'react';
import { PencilSquare, Trash } from 'react-bootstrap-icons';
import './TaskList.css';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSaveTask();
    }
  };

  const handleSaveTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const handleRemoveTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="task-list-container">
      <div className="task-list">
        {tasks.map((task, index) => (
          <div key={index} className="task-item">
            <span>{task}</span>
            <Trash className="remove-icon" onClick={() => handleRemoveTask(index)} />
          </div>
        ))}
        <div className="task-input-container">
          <input
            type="text"
            value={newTask}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            placeholder="Enter your task"
            className="task-input"
          />
          <Trash className="remove-icon" />
        </div>
      </div>
      <button className="save-button" onClick={handleSaveTask}>Save</button>
    </div>
  );
};

export default TaskList;
