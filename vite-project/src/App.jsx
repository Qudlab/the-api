// src/App.js
import React from 'react';
import './App.css';
import UserList from './UserList';

const App = () => {
  return (
    <div className="app-container">
      <header className="app-header">
        <UserList />
      </header>
    </div>
  );
};

export default App;
