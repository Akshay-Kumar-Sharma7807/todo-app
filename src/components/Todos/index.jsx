import { Container, Button, Table, Modal, Group, Checkbox, Text, Divider, ActionIcon, Switch } from '@mantine/core'
import React, { useState } from 'react'
import AddTodo from "./AddTodo"

export default function Todos() {
  const [todos, setTodos] = useState([])
  const [todoModal, setTodoModal] = useState(false);

  const fields = todos.map((todo, index) => (
    <Group key={index} mt="xs" size="lg">
      <Checkbox onChange={(e) => setTodos((t) => {
        console.log(e.target.checked)
        t[index].completed = e.target.checked
        return [...t]
      })}
        checked={todo.completed} />
      <Text
        sx={{ flex: 1 }}
      >{todo.task}</Text>
      <ActionIcon
        color="red"
        variant="hover"
        onClick={() => console.log("hello")}
      >
        <i className="bi bi-star" size={16} />
      </ActionIcon>
    </Group>
  ));


  return (
    <Container>
      <Modal
        opened={todoModal}
        onClose={() => setTodoModal(false)}
        title="Add New Task"
      >
        <AddTodo close={() => setTodoModal(false)} setTodos={setTodos} />
      </Modal>

      <Group position="center">
        <Button leftIcon={<i className="bi bi-plus"></i>} onClick={() => setTodoModal((t) => !t)}>
          Add New Task
        </Button>
        {/* {
          todos.map((todo) => {
            return (
              <>
                <Group sx={(theme) => ({

                })}
                  p={8}
                >
                  <Checkbox checked={todo.completed}></Checkbox>
                  <Text>{todo.task}</Text>
                </Group>
                <Divider />
              </>
            )
          })
        } */}
      </Group>
      {fields}
    </Container>
  )
}
