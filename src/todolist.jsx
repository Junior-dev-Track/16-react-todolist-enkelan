import React, { useState, useEffect } from 'react';

export default function TodoList() {
  const initialTodos = JSON.parse(localStorage.getItem('todos')) || [
    { text: 'My first todo', checked: false },
    { text: 'My second todo', checked: false },
  ];
  const [todos, setTodos] = useState(initialTodos);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const toggleCheck = (index) => {
    const newTodos = [...todos];
    newTodos[index].checked = !newTodos[index].checked;
    setTodos(newTodos);
  };

  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          <input
            type="checkbox"
            checked={todo.checked}
            onChange={() => toggleCheck(index)}
          />
          {todo.text}
        </li>
      ))}
    </ul>
  );
}
