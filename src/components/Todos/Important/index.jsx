import React from 'react'
import ListTodos from "../ListTodos";

export default function Important({ todos, setTodos }) {
  return (
    <ListTodos todos={todos} setTodos={setTodos} filterFunc={(a) => a.importance >= 50} />
  )
}
