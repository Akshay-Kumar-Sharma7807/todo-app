import React, { useState } from 'react'
import { Group, Checkbox, Text, ActionIcon, Paper } from "@mantine/core";
import EditTodo from "./EditTodo";

export default function ListTodos({ todos, setTodos, sortFunc, filterFunc }) {
  console.log(sortFunc, "and", filterFunc)
  sortFunc = sortFunc ?? function (a, b) { return b.importance - a.importance }
  filterFunc = filterFunc ?? function () { return true }

  const [currentIndex, setIndex] = useState(0);
  const [editMenu, setEditMenu] = useState(false);

  const openEditMenu = (index) => {
    setIndex(index);
    setEditMenu(true);
  }

  const deleteTodo = (index) => {
    setTodos((t) => {
      return t.filter((_, i) => i != index)
    })
  }

  const starTodo = (index) => {
    setTodos(todos.map((t, i) => {
      if (i === index) {
        t.favourite = !todos[index].favourite;
      }
      return t
    }))
  }

  const completeTodo = (e, index) => {
    setTodos((t) => {
      console.log(e.target.checked)
      t[index].completed = e.target.checked
      return [...t]
    })
  }

  const addToMyDay = (index) => {
    setTodos(todos.map((t, i) => {
      if (i === index) {
        t.myDay = !todos[index].myDay;
      }
      return t
    }))
  }

  const setTitle = (index, newTitle) => {
    setTodos(todos.map((t, i) => {
      if (i === index) {
        t.task = newTitle;
      }
      return t
    }))
  }

  return (
    <>
      <EditTodo
        addToMyDay={addToMyDay}
        todos={todos}
        index={currentIndex}
        editMenu={editMenu}
        setEditMenu={setEditMenu}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
        starTodo={starTodo}
        setTitle={setTitle}
      />

      {
        todos.sort(sortFunc).filter(filterFunc).map((todo, index) => (
          <Paper p="sm" shadow="md" radius="md" mt="xs" >
            <Group key={index} size="lg">
              <Checkbox onChange={(e) => completeTodo(e, index)}
                radius="xl"
                checked={todo.completed} />

              <Text
                sx={{ flex: 1 }}
                onClick={() => { openEditMenu(index) }}
              >{todo.task}</Text>
              <ActionIcon
                color="blue"
                variant="hover"
                onClick={() => starTodo(index)}
              >
                <i className={`bi bi-star${todo.favourite ? "-fill" : ""}`} size={16} />
                {todo.favourite}
              </ActionIcon>
              <ActionIcon
                color="red"
                variant="hover"
                onClick={() => deleteTodo(index)}
              >
                <i className={`bi bi-trash`} size={16} />
                {todo.favourite}
              </ActionIcon>
            </Group>
          </Paper>
        ))
      }
    </>
  )
}
