import React from 'react'

export default function List({ todos, deleteTodo }) {

  return (
    <ul className="list">
      {
        todos.map((t, index) => {
          return (
            <li key={index}>
              <input type="checkbox" name="complete" id="complete" checked={t.completed} />
              <div className="title">{t.text}</div>
              <button onClick={() => deleteTodo(index)}><i class="bi bi-x-circle-fill"></i></button>
            </li>
          )
        })
      }
    </ul>
  )
}
