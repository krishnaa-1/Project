import React, { useState } from "react";
import "./App.css"; // Import the CSS file

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [editingTodo, setEditingTodo] = useState(null);

  const addTodo = () => {
    if (!text.trim()) return;
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
    setText("");
  };

  const updateTodo = (id, updatedText, completed) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, text: updatedText, completed } : todo
    );
    setTodos(updatedTodos);
    setEditingTodo(null);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="app">
      <h1>Todo App</h1>
      <div className="todo-input">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new todo..."
        />
        <button onClick={addTodo}>Add</button>
      </div>

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            {editingTodo === todo.id ? (
              <>
                <input
                  type="text"
                  defaultValue={todo.text}
                  onChange={(e) => setText(e.target.value)}
                  className="edit-input"
                />
                <button onClick={() => updateTodo(todo.id, text, todo.completed)}>
                  Save
                </button>
              </>
            ) : (
              <>
                <span
                  className={`todo-text ${todo.completed ? "completed" : ""}`}
                  onClick={() => updateTodo(todo.id, todo.text, !todo.completed)}
                >
                  {todo.text}
                </span>
                <div className="todo-actions">
                  <button className="edit-btn" onClick={() => setEditingTodo(todo.id)}>
                    Edit
                  </button>
                  <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>
                    Delete
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
