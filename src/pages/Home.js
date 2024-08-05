import React, { useState } from 'react';
import Header from '../components/Header';
import TaskList from '../components/TaskList';

const Home = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="home">
      <Header 
        selectedDate={selectedDate} 
        onDateChange={(date) => setSelectedDate(date)} 
      />
      <TaskList />
    </div>
  );
};

export default Home;
