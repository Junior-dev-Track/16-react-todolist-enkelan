import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TodoList from './components/Todolist';
import CalendarComponent from './components/CalendarComponent';
import './style/App.css';

export default function App() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
  };

  return (
    <Router>
      <div>
        <nav>
          <ul className="calendar-nav">
            <li>
              <Link to="/">Todo List</Link>
            </li>
            <li>
              <Link to="/calendar">Calendar</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/calendar" element={<CalendarComponent />} />
          <Route
            path="/"
            element={
              <>
                <h1>My Todo List</h1>
                <div className="flexInputButton">
                  <input
                    type="text"
                    placeholder="Type your todo list"
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                  />
                  <button className="btn" type="submit">
                    Add Todo
                  </button>
                </div>
                <TodoList inputValue={inputValue} />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}
