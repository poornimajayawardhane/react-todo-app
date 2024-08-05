import React from 'react';
import Header from './components/Header';
import TaskList from './components/TaskList';
import './index.css';

const App = () => {
  return (
    <div id="root">
      <Header />
      <div className="main-content">
        <TaskList />
      </div>
      <footer className="footer">
        {/* Footer content here */}
      </footer>
    </div>
  );
};

export default App;
