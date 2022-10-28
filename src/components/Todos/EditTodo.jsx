import React from 'react'
import { Drawer, Title, Group, Slider, Textarea, Switch, Paper, TextInput, ActionIcon, ThemeIcon, Checkbox, MultiSelect, Footer, Text, Button } from "@mantine/core";
import { Calendar } from '@mantine/dates';
import { useLocalStorage } from '@mantine/hooks';
import { updateDoc, doc } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../../firebase';

export default function EditTodo({ editMenu, setEditMenu, todos, id, starTodo, completeTodo, deleteTodo, addToMyDay, setTitle, setNote, setImportance, updateCategories }) {
  const [user] = useAuthState(auth);
  const todo = todos[todos.findIndex(t => t.id === id)];
  const MARKS = [
    { value: 0, label: 'Not Important' },
    { value: 25, label: 'Less Important' },
    { value: 50, label: 'Important' },
    { value: 75, label: 'Very Important' },
    { value: 100, label: 'Must Do' },
  ];
  const [categories, setCategories] = useLocalStorage({
    key: "categories",
    defaultValue: [
      { value: "work", label: "Work" },
      { value: "games", label: "Games" },
      { value: "fun", label: "Fun" },
      { value: "essentials", label: "Essentials" },
    ],
  })


  if (todos && todo) return (
    <Drawer
      position="right"
      opened={editMenu}
      onClose={() => {
        setEditMenu((o) => !o)
        if (user) {
          updateDoc(doc(db, "Users", user.uid, "Tasks", todo.id), todo)

        }
      }}
      title={<Title order={4}>{todo.task}</Title>}
      padding="md"
      size={400}
      shadow="lg"
      sx={{
        "& .mantine-Drawer-drawer": {
          overflowY: "auto",
        }
      }}
    >
      <Paper p="xs" shadow="sm" radius="md" mb="xs" withBorder>
        <Group size="xl">
          <Checkbox onChange={(e) => completeTodo(e, id)}
            radius="xl"
            size="md"
            checked={todo.completed} />

          <TextInput
            sx={{ flex: 1 }}
            weight="bold"
            size="md"
            variant="unstyled"
            value={todo.task}
            required
            onChange={(e) => setTitle(id, e.target.value)}
          ></TextInput>
          <ActionIcon
            color="blue"
            variant="subtle"
            onClick={() => starTodo(id)}
            size="lg"
          >
            <i className={`bi bi-star${todo.favourite ? "-fill" : ""}`} size={20} />
            {todo.favourite}
          </ActionIcon>
        </Group>
      </Paper>

      <Paper shadow="sm" radius="md" p="xs" mb="xs" withBorder>
        <Switch size="md" label="Add to my day" name="my-day" checked={todo.myDay} onChange={() => addToMyDay(id)}></Switch>
      </Paper>
      <Paper shadow="sm" radius="md" p="xs" mb="xs" withBorder>
        <Group >
          {/* <ThemeIcon pd="xs" variant="light" size="lg">
            <i className="bi bi-tag"></i>
          </ThemeIcon> */}
          <MultiSelect
            sx={{ flex: 1 }}
            data={categories}
            placeholder="Choose a Category"
            searchable
            nothingFound="Nothing found"
            creatable
            getCreateLabel={(query) => `+ Create ${query}`}
            variant="unstyled"
            value={todo.categories ?? []}
            onChange={(categories) => updateCategories(id, categories)}
            // complete this function to update categories
            onCreate={(query) => setCategories((current) => [...current, { value: query.toLowerCase(), label: query }])}
            icon={<i className="bi bi-tag" />}
          />
        </Group>
      </Paper>

      <Paper shadow="sm" radius="md" px="xs" mb="xs" withBorder>
        <Textarea
          variant='unstyled'
          placeholder='Add note'
          onChange={(e) => setNote(id, e.target.value)}
          value={todo.note ?? ""}
        />
      </Paper>
      <Paper shadow="sm" radius="md" p="md" mb="xs" withBorder>
        <Text>Specify Importance</Text>
        <Slider
          label={(val) => MARKS.find((mark) => mark.value === val).label}
          marks={MARKS}
          step={25}
          value={todo.importance}
          onChange={(importance) => setImportance(id, importance)}
          styles={{ markLabel: { display: 'none' } }}
        />
      </Paper>
      <Paper shadow="sm" radius="md" mb="xs" withBorder>

        <Button variant="subtle" size="md" fullWidth color="gray" sx={{ flex: 1 }}
          leftIcon={<i className="bi bi-bell" />}
          style={{ justifyContent: "flex-start" }}
        >
          Remind me
        </Button>
        <Button variant="subtle" size="md" fullWidth color="gray" sx={{ flex: 1 }}
          leftIcon={<i className="bi bi-calendar" />}
        >
          Add Due Date
        </Button>
        <Button variant="subtle" size="md" fullWidth color="gray" sx={{ flex: 1 }}
          leftIcon={<i className="bi bi-alarm" />}
        >
          Repeat
        </Button>
        {/* <Paper></Paper> */}
        {/* <Paper></Paper> */}
        {/* <Paper></Paper> */}
      </Paper>
      {/* <Footer> */}
      <Group p="sm" position="apart" mt="auto" sx={{ margin: "auto" }}>
        <ActionIcon
          color="red"
          variant="subtle"
          onClick={() => deleteTodo(id)}
        >
          <i className={`bi bi-trash`} size={16} />
          {todo.favourite}
        </ActionIcon>
        <Text variant='secondary'>Created Today</Text>
      </Group>
      {/* </Footer> */}
    </Drawer >
  )

  return <></>
}
