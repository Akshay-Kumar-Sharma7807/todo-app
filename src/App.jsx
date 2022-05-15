import { useState, useEffect } from 'react';
import './App.css';
import Form from "./components/Form";
import List from "./components/List";
import Header from "./components/Header";

function App() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || [])

  useEffect(() => {
    // console.log("change in todos", todos);
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <div className="App">
      <Header />
      <div className="container">
        <Form todos={todos} setTodos={setTodos} />
        <List todos={todos} deleteTodo={(todoIndex) => {
          const newTodos = todos.filter((_, index) => index !== todoIndex);
          setTodos(newTodos);
        }}
          setTodos={setTodos}
        />
      </div>
    </div>
  )
}

export default App
