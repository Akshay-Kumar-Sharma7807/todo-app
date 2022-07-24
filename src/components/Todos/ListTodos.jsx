import React, { useState } from 'react'
import { Group, Checkbox, Text, UnstyledButton, ActionIcon, Paper } from "@mantine/core";
import EditTodo from "./EditTodo";

export default function ListTodos({ todos, setTodos, sortFunc, filterFunc }) {
  // console.log(sortFunc, "and", filterFunc)
  sortFunc = sortFunc ?? function (a, b) { return b.importance - a.importance }
  filterFunc = filterFunc ?? function () { return true }

  const [currentId, setId] = useState(0);
  const [editMenu, setEditMenu] = useState(false);


  // API's to manipulate todos

  const openEditMenu = (id) => {
    setId(id);
    setEditMenu(true);
  }

  const deleteTodo = (id) => {
    setTodos((list) => {
      return list.filter((t) => t.id != id)
    })
  }

  const starTodo = (id) => {
    setTodos(todos.map((t) => {
      if (t.id === id) {
        t.favourite = !t.favourite;
      }
      return t
    }))
  }

  const completeTodo = (e, id) => {
    setTodos(todos.map((t) => {
      if (t.id === id) {
        t.completed = e.target.checked
      }
      return t
    }))
  }

  const addToMyDay = (id) => {
    setTodos(todos.map((t) => {
      if (t.id === id) {
        t.myDay = !t.myDay;
      }
      return t
    }))
  }

  const setTitle = (id, title) => {
    setTodos(todos.map((t) => {
      if (t.id === id) {
        t.task = title;
      }
      return t
    }))
  }

  const setNote = (id, note) => {
    setTodos(todos.map((t) => {
      if (t.id === id) {
        t.note = note;
      }
      return t
    }))
  }

  const setImportance = (id, importance) => {
    setTodos(todos.map((t) => {
      if (t.id === id) {
        t.importance = importance;
      }
      return t
    }))
  }

  const updateCategories = (id, categories) => {
    setTodos(todos.map((t) => {
      if (t.id === id) {
        t.categories = categories;
      }
      return t;
    }))
  }

  return (
    <>
      <EditTodo
        addToMyDay={addToMyDay}
        todos={todos}
        id={currentId}
        editMenu={editMenu}
        setEditMenu={setEditMenu}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
        starTodo={starTodo}
        setTitle={setTitle}
        setNote={setNote}
        setImportance={setImportance}
        updateCategories={updateCategories}
      />

      {
        todos.sort(sortFunc).filter(filterFunc).map((todo) => (
          <Paper p="sm" shadow="md" radius="md" mt="xs" key={todo.id} >
            <Group key={todo.id} size="lg">
              <Checkbox onChange={(e) => completeTodo(e, todo.id)}
                radius="xl"
                checked={todo.completed} />

              <UnstyledButton
                sx={{ flex: 1 }}
                onClick={() => { openEditMenu(todo.id) }}
              >{todo.task}</UnstyledButton>
              <ActionIcon
                color="blue"
                variant="hover"
                onClick={() => starTodo(todo.id)}
              >
                <i className={`bi bi-star${todo.favourite ? "-fill" : ""}`} size={16} />
                {todo.favourite}
              </ActionIcon>
              <ActionIcon
                color="red"
                variant="hover"
                onClick={() => deleteTodo(todo.id)}
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
