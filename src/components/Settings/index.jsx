import { ActionIcon, Aside, Container, Drawer, Group, Switch, Text, Title, Tooltip } from '@mantine/core'
import React, { useState } from 'react'

export default function Settings() {
  const [open, setOpen] = useState();
  const toggleSettings = () => {
    setOpen((o) => !o)
  }
  return (
    <>
      <Tooltip label="Settings" withArrow>
        <ActionIcon variant="default" onClick={() => toggleSettings()}>
          <i className='bi bi-gear'></i>
        </ActionIcon>
      </Tooltip>
      <Drawer
        position="right"
        opened={open}
        onClose={() => setOpen((o) => !o)}
        title={<Title order={4}>Settings</Title>}
        padding="md"
        size={400}
        shadow="lg"
        sx={{
          "& .mantine-Drawer-drawer": {
            overflowY: "auto",
          }
        }}
      >
        <Title order={5} mb="md">
          General
        </Title>
        <Group>
          <Switch size="md" label="Turn on reminder notifications" name="notification"></Switch>
        </Group>
      </Drawer>
    </>
  )
}
