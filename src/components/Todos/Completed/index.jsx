import React from 'react'
import ListTodos from "../ListTodos";

export default function Completed({ todos, setTodos }) {
  return (
    <ListTodos todos={todos} setTodos={setTodos} filterFunc={(a) => a.completed} />
  )
}
