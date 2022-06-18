import React from 'react'
import ListTodos from "../ListTodos";

export default function Planned({ todos, setTodos }) {
  return (
    <ListTodos todos={todos} setTodos={setTodos} />
  )
}
