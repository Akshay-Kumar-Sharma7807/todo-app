import { useState, useEffect } from 'react';
import './App.css';
import Form from "./components/Form";
import List from "./components/List";
import Header from "./components/Header";
import Login from "./components/Login";
import Settings from "./components/Settings";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || [])

  useEffect(() => {
    // console.log("change in todos", todos);
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="" element={
            <div className="container">
              <Form todos={todos} setTodos={setTodos} />
              <List todos={todos} deleteTodo={(todoIndex) => {
                const newTodos = todos.filter((_, index) => index !== todoIndex);
                setTodos(newTodos);
              }}
                setTodos={setTodos}
              />
            </div>
          } />
          <Route path="/settings" element={<Settings />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
