import React, { useState } from 'react';
import TodoList from './todolist.jsx';

export default function App() {
  return (
    <>
      <h1>My Todo List</h1>
      <div className="flexInputButton">
        <input type="text" placeholder="Type your todo list" />
        <button className="btn">Add Todo</button>
      </div>
      <TodoList />
    </>
  );
}
