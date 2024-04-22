import React, { useState, useEffect } from 'react';

export default function TodoList({ inputValue }) {
  const initialTodos = [
    { id: 1, name: 'My first todo', done: false },
    { id: 2, name: 'My second todo', done: true },
  ];
  const [todos, setTodos] = useState(initialTodos);

  const handleCheck = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            done: !todo.done,
          };
        }
        return todo;
      })
    );
  };

  const handleRemoveItem = (id) => {
    setTodos((prevTodos) => {
      const updatedTodos = [...prevTodos];
      const index = updatedTodos.findIndex((todo) => todo.id === id);
      if (index !== -1) {
        updatedTodos.splice(index, 1);
      }
      return updatedTodos;
    });
  };

  const handleAddTodo = () => {
    const newTodo = {
      id: todos.length + 1,
      name: inputValue,
      done: false,
    };
    setTodos(todos.concat(newTodo));
  };

  useEffect(() => {
    const button = document.querySelector('.btn');
    button.addEventListener('click', handleAddTodo);

    return () => {
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
            onClick={() => handleRemoveItem(todo.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
