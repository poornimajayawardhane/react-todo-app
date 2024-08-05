import React, { useState } from 'react';
import { Trash } from 'react-bootstrap-icons';
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
      setTasks([...tasks, { text: newTask, isEditing: false }]);
      setNewTask('');
    }
  };

  const handleRemoveTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const toggleEditing = (index) => {
    const newTasks = tasks.map((task, i) =>
      i === index ? { ...task, isEditing: !task.isEditing } : task
    );
    setTasks(newTasks);
  };

  const handleTaskChange = (event, index) => {
    const newTasks = tasks.map((task, i) =>
      i === index ? { ...task, text: event.target.value } : task
    );
    setTasks(newTasks);
  };

  const handleTaskKeyPress = (event, index) => {
    if (event.key === 'Enter') {
      toggleEditing(index);
    }
  };

  return (
    <div className="task-list-container">
      <div className="task-list">
        {tasks.map((task, index) => (
          <div key={index} className="task-item">
            {task.isEditing ? (
              <input
                type="text"
                value={task.text}
                onChange={(event) => handleTaskChange(event, index)}
                onKeyPress={(event) => handleTaskKeyPress(event, index)}
                className="task-input"
                onBlur={() => toggleEditing(index)} // Save when input loses focus
              />
            ) : (
              <span onClick={() => toggleEditing(index)}>{task.text}</span>
            )}
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
        </div>
      </div>
      <button className="save-button" onClick={handleSaveTask}>Save</button>
    </div>
  );
};

export default TaskList;
