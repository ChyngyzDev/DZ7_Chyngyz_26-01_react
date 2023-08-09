import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  const addTodo = () => {
    if (todo !== "") {
      setTodos([...todos, { task: todo, completed: false }]);
      setTodo("");
    }
  };

  const deleteTodo = (text) => {
    const newTodos = todos.filter((todo) => {
      return todo.task !== text;
    });
    setTodos(newTodos);
  };

  const completeTodo = (text) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.task === text) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <h1>Приложение Todo</h1>

      <div className="input-wrapper">
        <input
          type="text"
          name="todo"
          value={todo}
          placeholder="Создать новую задачу"
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
        <button className="add-button" onClick={addTodo}>
        ДОБАВИТЬ
        </button>
      </div>

      {todos?.length > 0 ? (
        <ul className="todo-list">
          {todos.map((todo, index) => (
            <div className="todo">
              <li
                key={index}
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              >
                {todo.task}
              </li>

              <button
                className="delete-button"
                onClick={() => {
                  deleteTodo(todo.task);
                }}
              >
                Удалить
              </button>

              <button
                className="complete-button"
                onClick={() => {
                  completeTodo(todo.task);
                }}
              >
                Выполнено
              </button>
            </div>
          ))}
        </ul>
      ) : (
        <div className="empty">
          <p>Задание не найдено</p>
        </div>
      )}
    </div>
  );
};

export default App;