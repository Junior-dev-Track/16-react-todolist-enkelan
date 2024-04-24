import React, { useState, useEffect } from 'react';
import { useLocalStorage } from './LocalStorage';
import { EditIcon, DeleteIcon } from './EditIcon';
import { FaCheck } from 'react-icons/fa';

export default function TodoList({ inputValue }) {
  const [todos, setTodos] = useLocalStorage('todos', [
    { id: 1, name: 'My first todo', done: false },
    { id: 2, name: 'My second todo', done: true },
  ]);

  const [editingId, setEditingId] = useState(null);
  const [editingValue, setEditingValue] = useState('');

  const handleCheck = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const handleEditClick = (id, text) => {
    setEditingId(id);
    setEditingValue(text);
  };

  const handleSaveEdit = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, name: editingValue } : todo
      )
    );
    setEditingId(null);
    setEditingValue('');
  };

  const handleRemoveItem = (id) => {
    setTodos((prevTodos) => {
      const todoToRemove = prevTodos.find((todo) => todo.id === id);
      if (todoToRemove && todoToRemove.done) {
        return prevTodos.filter((todo) => todo.id !== id);
      }
      return prevTodos;
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
          {editingId === todo.id ? (
            <div className="editing-container">
              <input
                type="text"
                value={editingValue}
                onChange={(e) => setEditingValue(e.target.value)}
                autoFocus
              />
              <FaCheck
                className="save-icon"
                onClick={() => handleSaveEdit(todo.id)}
              />
            </div>
          ) : (
            <span onDoubleClick={() => handleEditClick(todo.id, todo.name)}>
              {todo.name}
            </span>
          )}
          <div className="icon-container">
            {editingId !== todo.id && (
              <EditIcon
                onClick={() => handleEditClick(todo.id, todo.name)}
                style={{ marginLeft: '10px' }}
              />
            )}
            <DeleteIcon
              onClick={() => handleRemoveItem(todo.id)}
              disabled={!todo.done}
              style={{ marginLeft: '10px' }}
            />
          </div>
        </li>
      ))}
    </ul>
  );
}
