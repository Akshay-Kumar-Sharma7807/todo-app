import React from 'react'
import { Drawer, Title, Group, Textarea, Switch, Paper, TextInput, ActionIcon, ThemeIcon, Checkbox, MultiSelect } from "@mantine/core";

export default function EditTodo({ editMenu, setEditMenu, todos, index, starTodo, completeTodo, deleteTodo, addToMyDay, setTitle }) {
  const todo = todos[index];
  console.log("todos", todos);

  return (
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
        />
      </Paper>
      <Paper shadow="sm" radius="md" p="md" mb="xs" withBorder>
      </Paper>
      <Paper shadow="sm" radius="md" p="md" mb="xs" withBorder>
      </Paper>
    </Drawer>
  )
}
