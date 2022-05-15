import { useState, useEffect } from 'react';
import './App.css';
import Form from "./components/Form";
import List from "./components/List";

function App() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <div className="App">
      <Form todos={todos} setTodos={setTodos} />
      <List todos={todos} deleteTodo={(todoIndex) => {
        const newTodos = todos.filter((_, index) => index !== todoIndex);
        setTodos(newTodos);
      }}
      />
    </div>
  )
}

export default App
