import { useState, useEffect } from 'react';
// import './App.css';
import Form from "./components/TodoForm";
import List from "./components/List";
// import Header from "./components/Header";
import Login from "./components/Login";
import Settings from "./components/Settings";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderComponent from './components/Header';
import Layout from "./Layout"

function App() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || [])

  useEffect(() => {
    // console.log("change in todos", todos);
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <Router>
      <div className={localStorage.getItem("retro") ? "App" : "App modern"}>
        {/* <HeaderComponent /> */}
        <Layout />
      </div>
    </Router>
  )
}

export default App
