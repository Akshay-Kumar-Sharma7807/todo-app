import { ActionIcon, Aside, Container, Divider, Drawer, Group, Stack, Switch, Text, Title, Tooltip } from '@mantine/core'
import React, { useState } from 'react'

export default function Settings() {
  const [open, setOpen] = useState();

  // Settings state
  const [completionSound, setCompletionSound] = useState(true);

  // Smart Lists State
  const [important, setImportant] = useState(true);
  const [planned, setPlanned] = useState(true);
  const [all, setAll] = useState(true);
  const [completed, setCompleted] = useState(true);
  const [assigned, setAssigned] = useState(true);

  const [email, setEmail] = useState(false);
  const [pushNotifications, setPushNotifications] = useState(false);

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
        <Title order={4} mb="sm">
          General
        </Title>
        <Stack>
          <Switch size="md" label="Turn on reminder notifications" name="notification"></Switch>
          <Switch size="md" checked={completionSound} onChange={(e) => setCompletionSound(e.currentTarget.checked)} label="Play Completion Sound" name="notification"></Switch>
        </Stack>
        <Title order={4} my="sm">Smart Lists</Title>
        <Stack>
          <Switch size="md" checked={important} onChange={(e) => setImportant(e.target.checked)} label="Important" name="notification"></Switch>
          <Switch size="md" checked={planned} onChange={(e) => setPlanned(e.target.checked)} label="Planned" name="notification"></Switch>
          <Switch size="md" checked={all} onChange={(e) => setAll(e.target.checked)} label="All" name="notification"></Switch>
          <Switch size="md" checked={completed} onChange={(e) => setCompleted(e.target.checked)} label="Completed" name="notification"></Switch>
          <Switch size="md" checked={assigned} onChange={(e) => setAssigned(e.target.checked)} label="Assigned to me" name="notification"></Switch>
        </Stack>
        <Title order={4} my="sm">Notifications</Title>
        <Stack>
          <Switch size="md" checked={email} onChange={(e) => setEmail(e.target.checked)} label="Email" name="notification"></Switch>
          <Switch size="md" checked={pushNotifications} onChange={(e) => setPushNotifications(e.target.value)} label="Push Notifications" name="notification"></Switch>
        </Stack>
      </Drawer>
    </>
  )
}
