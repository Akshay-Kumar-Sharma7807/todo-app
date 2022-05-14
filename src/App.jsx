import { useState } from 'react'
import './App.css'

function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])

  const handleClick = (e) => {
    console.log(todos)
    e.preventDefault();
    setTodos((p) => {
      return [...p, todo]
    })
  }

  const removeTodo = (index) => {
    // console.log(todos.splice(index, 1));
    setTodos((p) => {
      p.splice(index, 2)
      return p
    })
    setTodos((p) => p);
  }

  return (
    <div className="App">
      <form className="form">
        <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} required />
        <button onClick={handleClick} type="submit"><ion-icon name="checkmark-sharp"></ion-icon></button>
      </form>
      <ul className="list">
        {
          todos.map((t, index) => {
            return (
              <li key={index}>
                {t}
                <button onClick={() => removeTodo(index)}><ion-icon name="close-circle-outline"></ion-icon></button>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default App
