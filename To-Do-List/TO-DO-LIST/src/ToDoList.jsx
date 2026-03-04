import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./ToDoList.css";

const ToDoList = () => {
  let [todos, setTodos] = useState([]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    if (!newTodo.trim()) return;

    setTodos((prevTodos) => [
      ...prevTodos,
      { task: newTodo, id: uuidv4(), done: false },
    ]);

    setNewTodo("");
  };

  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  let deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  let toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo,
      ),
    );
  };

  let toggleTasks = () => {
    setTodos((prevTodos) => prevTodos.map((todo) => ({ ...todo, done: true })));
  };

  return (
    <div className="todo-container">
      <h2>My Todo List</h2>

      <div className="input-section">
        <input
          type="text"
          placeholder="Add a task..."
          value={newTodo}
          onChange={updateTodoValue}
          onKeyDown={(e) => {
            if (e.key === "Enter") addNewTask();
          }}
        />
        <button className="add-btn" onClick={addNewTask}>
          Add
        </button>
      </div>

      <h4>Tasks ({todos.length})</h4>

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            <span className={todo.done ? "completed" : ""}>{todo.task}</span>

            <div className="btn-group">
              <button
                className="complete-btn"
                onClick={() => toggleTodo(todo.id)}
              >
                {todo.done ? "Undo" : "Complete"}
              </button>

              <button
                className="delete-btn"
                onClick={() => deleteTodo(todo.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

      <button className="complete-all-btn" onClick={toggleTasks}>
        Complete All
      </button>
    </div>
  );
};

export default ToDoList;
