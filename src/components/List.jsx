import React from 'react'

export default function List({ todos, deleteTodo, setTodos }) {

  const changeCompleted = (e, i) => {
    // console.log(e.target.checked);
    // setTodos((prev) => {
    //   prev[0].checked = true;
    //   return prev;
    // })
    todos[i]["completed"] = e.target.checked;
    let newTodos = todos.slice();
    console.log("new", newTodos);
    setTodos(newTodos)
  }

  return (
    <ul className="list">
      {/* {todos.sort((a, b) => {
        if (a.completed) return 1
        if (b.completed) return -1
        return 0
      })} */}
      {
        todos.sort((a, b) => {
          if (a.completed) return 1
          if (b.completed) return -1
          return 0
        }).map((t, index) => {
          return (
            <li key={index}>
              <input type="checkbox" name="complete" id="complete" checked={t.completed} onChange={(e) => changeCompleted(e, index)} />
              <div className="title">{t.text}</div>
              {/* add-button class name should be removed */}
              <button className="add-button" onClick={() => deleteTodo(index)}><i className="bi bi-x-circle-fill"></i></button>
            </li>
          )
        })
      }
    </ul>
  )
}
