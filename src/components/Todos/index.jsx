import { Container, Button, Table, Modal, Group, Checkbox, Text, Dialog, Divider, ActionIcon, Switch } from '@mantine/core'
import React, { useState } from 'react'
import AddTodo from "./AddTodo"
import { useLocalStorage } from '@mantine/hooks';
import { Routes, Route } from 'react-router-dom';
import Important from './Important';
import Planned from "./Planned";
import All from "./All";
import Completed from "./Completed";
import AssignedToMe from "./AssignedToMe";
import Tasks from "./Tasks";
import Starred from "./Starred";
import ListTodos from './ListTodos';
import { MultiSelect } from '@mantine/core';
import Filters from './Filters';



export default function Todos() {
  const [todos, setTodos] = useLocalStorage({
    key: 'todos',
    defaultValue: [],
  });
  const [todoModal, setTodoModal] = useState(false);
  const [dialog, setDialog] = useState(false);


  return (
    <Container>
      <Modal
        opened={todoModal}
        onClose={() => setTodoModal(false)}
        title="Add New Task"
        size="md"
      >
        <AddTodo close={() => setTodoModal(false)} setTodos={setTodos} />
      </Modal>

      <Group position="apart">
        <Button leftIcon={<i className="bi bi-plus" style={{ fontSize: "1.2rem" }}></i>} onClick={() => setTodoModal((t) => !t)}>
          Add New Task
        </Button>
        <Button onClick={() => setDialog(true)}>
          Sort & Filter
        </Button>
        <Dialog
          opened={dialog}
          withCloseButton
          onClose={() => setDialog(false)}
          size="xl"
          radius="md"
          position={{ top: 20, right: 20 }}
        >
          <Filters />
        </Dialog>

      </Group>
      <Routes>
        <Route path="/my-day" element={<ListTodos todos={todos} setTodos={setTodos} filterFunc={(a) => a.myDay} />} />
        <Route path="/important" element={<Important todos={todos} setTodos={setTodos} />} />
        <Route path="/planned" element={<Planned todos={todos} setTodos={setTodos} />} />
        <Route path="/all" element={<All todos={todos} setTodos={setTodos} />} />
        <Route path="/completed" element={<Completed todos={todos} setTodos={setTodos} />} />
        <Route path="/assigned-to-me" element={<AssignedToMe todos={todos} setTodos={setTodos} />} />
        <Route path="/inbox" element={<Tasks todos={todos} setTodos={setTodos} />} />
        <Route path="/starred" element={<Starred todos={todos} setTodos={setTodos} />} />
      </Routes>
    </Container>
  )
}
