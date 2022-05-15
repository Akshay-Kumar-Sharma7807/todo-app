import React, { useState } from 'react'

export default function Form({ todos, setTodos }) {

  const [text, setText] = useState("")
  const handleClick = (e) => {
    console.log(todos)
    e.preventDefault();
    setTodos((p) => {
      console.log(p)
      return [...p, { completed: false, text }]
    })
    setText("");
  }

  return (
    <form className="form">
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} required />
      <button onClick={handleClick} type="submit" className='add-button'>
        <i className="bi bi-check-lg"></i>
      </button>
    </form>
  )
}
