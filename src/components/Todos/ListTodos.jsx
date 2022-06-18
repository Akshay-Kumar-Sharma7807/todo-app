import React from 'react'
import { Group, Checkbox, Text, ActionIcon } from "@mantine/core";

export default function ListTodos({ todos, setTodos, sortFunc, filterFunc }) {
  console.log(sortFunc, "and", filterFunc)
  sortFunc = sortFunc ?? function (a, b) { return b.importance - a.importance }
  filterFunc = filterFunc ?? function () { return true }
  return (
    <>
      {
        todos.sort(sortFunc).filter(filterFunc).map((todo, index) => (
          <Group key={index} mt="xs" size="lg">
            <Checkbox onChange={(e) => setTodos((t) => {
              console.log(e.target.checked)
              t[index].completed = e.target.checked
              return [...t]
            })}
              radius="xl"
              checked={todo.completed} />
            <Text
              sx={{ flex: 1 }}
            >{todo.task}</Text>
            <ActionIcon
              color="blue"
              variant="hover"
              onClick={() => setTodos(todos.map((t, i) => {
                if (i === index) {
                  t.favourite = !todo.favourite;
                }
                return t
              }))
              }
            >
              <i className={`bi bi-star${todo.favourite ? "-fill" : ""}`} size={16} />
              {todo.favourite}
            </ActionIcon>
            <ActionIcon
              color="red"
              variant="hover"
              onClick={() => setTodos((t) => {
                return t.filter((_, i) => i != index)
              })
              }
            >
              <i className={`bi bi-trash`} size={16} />
              {todo.favourite}
            </ActionIcon>
          </Group>
        ))
      }
    </>
  )
}
