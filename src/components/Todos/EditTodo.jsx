import React from 'react'
import { Drawer, Title, Group, Switch } from "@mantine/core";

export default function EditTodo({ editMenu, setEditMenu, todo }) {
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
      {/* <Title order={5} mb="md">
        General
      </Title> */}
      <Group>
        <Switch size="md" label="Add to my day" name="my-day"></Switch>
      </Group>
    </Drawer>
  )
}
