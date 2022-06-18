import React from 'react'
import ListTodos from "../ListTodos";

export default function All({ todos, setTodos }) {
  return (
    <ListTodos todos={todos} setTodos={setTodos} />
  )
}
