import React from 'react'
import { Drawer, Title, Group, Slider, Textarea, Switch, Paper, TextInput, ActionIcon, ThemeIcon, Checkbox, MultiSelect, Footer, Text } from "@mantine/core";

export default function EditTodo({ editMenu, setEditMenu, todos, index, starTodo, completeTodo, deleteTodo, addToMyDay, setTitle, setNote, setImportance, setCategories }) {
  const todo = todos[index];
  const MARKS = [
    { value: 0, label: 'Not Important' },
    { value: 25, label: 'Less Important' },
    { value: 50, label: 'Important' },
    { value: 75, label: 'Very Important' },
    { value: 100, label: 'Must Do' },
  ];


  if (todos && todos[index]) return (
    <Drawer
      position="right"
      opened={editMenu}
      onClose={() => setEditMenu((o) => !o)}
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
        <Group key={index} size="xl">
          <Checkbox onChange={(e) => completeTodo(e, index)}
            radius="xl"
            size="md"
            checked={todo.completed} />

          <TextInput
            sx={{ flex: 1 }}
            weight="bold"
            size="md"
            variant="unstyled"
            value={todo.task}
            onChange={(e) => setTitle(index, e.target.value)}
          ></TextInput>
          <ActionIcon
            color="blue"
            variant="hover"
            onClick={() => starTodo(index)}
            size="lg"
          >
            <i className={`bi bi-star${todo.favourite ? "-fill" : ""}`} size={20} />
            {todo.favourite}
          </ActionIcon>
        </Group>
      </Paper>

      <Paper shadow="sm" radius="md" p="md" mb="xs" withBorder>
        <Switch size="md" label="Add to my day" name="my-day" checked={todo.myDay} onChange={() => addToMyDay(index)}></Switch>
      </Paper>
      <Paper shadow="sm" radius="md" p="xs" mb="xs" withBorder>
        <Group >
          {/* <ThemeIcon pd="xs" variant="light" size="lg">
            <i className="bi bi-tag"></i>
          </ThemeIcon> */}
          <MultiSelect
            sx={{ flex: 1 }}
            data={[
              { value: "kjsdf", label: "Work" },
              { value: "dfg", label: "Games" },
              { value: "afd", label: "Fun" },
              { value: "xcvb", label: "Essentials" },
            ]}
            placeholder="Choose a Category"
            searchable
            nothingFound="Nothing found"
            creatable
            getCreateLabel={(query) => `+ Create ${query}`}
            variant="unstyled"
            // complete this function to update categories
            // onCreate={(query) => setData((current) => [...current, query])}
            icon={<i className="bi bi-tag" />}
          />
        </Group>
      </Paper>

      <Paper shadow="sm" radius="md" p="xs" mb="xs" withBorder>
        <Textarea
          variant='unstyled'
          placeholder='Add note'
          onChange={(e) => setNote(index, e.target.value)}
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
          onChange={(importance) => setImportance(index, importance)}
          styles={{ markLabel: { display: 'none' } }}
        />
      </Paper>
      <Paper shadow="sm" radius="md" p="md" mb="xs" withBorder>
      </Paper>
      <Footer>
        <Group p="sm" position="apart">
          <ActionIcon
            color="red"
            variant="hover"
            onClick={() => deleteTodo(index)}
          >
            <i className={`bi bi-trash`} size={16} />
            {todo.favourite}
          </ActionIcon>
          <Text color="gray">Created Today</Text>
        </Group>
      </Footer>
    </Drawer>
  )

  return <></>
}
