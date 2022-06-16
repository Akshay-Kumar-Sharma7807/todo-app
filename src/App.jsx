import { useState, useEffect } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./Layout"

function App() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || [])

  useEffect(() => {
    // console.log("change in todos", todos);
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <Router>
      <div className={"App"}>
        <Layout />
      </div>
    </Router>
  )
}

export default App
