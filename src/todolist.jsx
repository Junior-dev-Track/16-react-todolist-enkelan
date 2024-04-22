import React, { useState, useEffect } from 'react';

export default function TodoList({ inputValue }) {
  const initialTodos = [
    { id: 1, name: 'My first todo', done: false },
    { id: 2, name: 'My second todo', done: true },
  ];
  const [todos, setTodos] = useState(initialTodos);

  const handleCheck = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      );
    });
  };

  const handleRemoveItem = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };

  const handleAddTodo = (event) => {
    if (
      event.type === 'click' ||
      (event.type === 'keypress' && event.key === 'Enter')
    ) {
      const newTodo = {
        id: todos.length + 1,
        name: inputValue,
        done: false,
      };
      setTodos(todos.concat(newTodo));
    }
  };

  useEffect(() => {
    const input = document.querySelector('.flexInputButton input');
    const button = document.querySelector('.flexInputButton .btn');

    input.addEventListener('keypress', handleAddTodo);
    button.addEventListener('click', handleAddTodo);

    return () => {
      input.removeEventListener('keypress', handleAddTodo);
      button.removeEventListener('click', handleAddTodo);
    };
  }, [todos, inputValue]);

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <input
            type="checkbox"
            id={todo.id}
            name={todo.name}
            checked={todo.done}
            onChange={() => handleCheck(todo.id)}
          />
          {todo.name}
          <button
            className="btn btn-todolist"
            onClick={() => handleRemoveItem(todo.id)}
            disabled={!todo.done || todos.every((t) => !t.done)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
