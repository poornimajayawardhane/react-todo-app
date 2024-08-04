// src/App.js
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css'; // Import the CSS file

const App = () => {
  return (
    <div>
      <Header />
      <main className="container mt-4">
        {/* Main content goes here */}
      </main>
      <Footer />
    </div>
  );
};

export default App;
