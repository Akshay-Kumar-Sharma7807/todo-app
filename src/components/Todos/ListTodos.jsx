import React, { useState } from 'react'
import { Group, Checkbox, Text, UnstyledButton, ActionIcon, Paper, Title, Container, Center } from "@mantine/core";
import EditTodo from "./EditTodo";
import { deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../../firebase';

export default function ListTodos({ todos, setTodos, sortFunc, filterFunc }) {
  const [user] = useAuthState(auth)
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
    if (user) {
      deleteDoc(doc(db, "Users", user.uid, "Tasks", id))
    }
  }

  const starTodo = (id) => {
    let fav;
    setTodos(todos.map((t) => {
      if (t.id === id) {
        fav = !t.favourite;
        t.favourite = !t.favourite;
      }
      return t
    }))
    if (user) {
      updateDoc(doc(db, "Users", user.uid, "Tasks", id), {
        favourite: fav
      })
    }
  }

  const completeTodo = (e, id) => {
    setTodos(todos.map((t) => {
      if (t.id === id) {
        t.completed = e.target.checked
      }
      return t
    }))

    if (user) {
      updateDoc(doc(db, "Users", user.uid, "Tasks", id), {
        completed: e.target.checked
      })
    }
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
                variant="subtle"
                onClick={() => starTodo(todo.id)}
              >
                <i className={`bi bi-star${todo.favourite ? "-fill" : ""}`} size={16} />
                {todo.favourite}
              </ActionIcon>
              <ActionIcon
                color="red"
                variant="subtle"
                onClick={() => deleteTodo(todo.id)}
              >
                <i className={`bi bi-trash`} size={16} />
                {todo.favourite}
              </ActionIcon>
            </Group>
          </Paper>
        ))
      }

      {todos.length === 0 &&
        <Center my="sm">
          <Title order={2}>No Tasks</Title>

        </Center>
      }
    </>
  )
}
