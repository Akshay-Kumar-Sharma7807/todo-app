import React from 'react'

export default function List({ todos, deleteTodo }) {

  const removeTodo = (index) => {
    // console.log(todos.splice(index, 1));
    setTodos((p) => {
      p.splice(index, 2);
      return p;
    })
    // setTodos((p) => p);
  }

  return (
    <ul className="list">
      {
        todos.map((t, index) => {
          return (
            <li>
              <input type="checkbox" name="complete" id="complete" />
              <div className="title">{t}</div>
              <button onClick={() => deleteTodo(index)}><i class="bi bi-x-circle-fill"></i></button>
            </li>
          )
        })
      }
    </ul>
  )
}
