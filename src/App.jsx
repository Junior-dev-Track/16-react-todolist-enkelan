import React, { useState } from 'react';
import TodoList from './todolist';

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
        <button className="btn" type="sumbit">
          Add Todo
        </button>
      </div>
      <TodoList inputValue={inputValue} />
    </>
  );
}
