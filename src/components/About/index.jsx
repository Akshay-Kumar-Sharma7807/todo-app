import { ActionIcon, Aside, Container, Drawer, Group, Switch, Text, Title, Tooltip } from '@mantine/core'
import React, { useState } from 'react'

export default function About() {
  const [open, setOpen] = useState();
  const toggleAbout = () => {
    setOpen((o) => !o)
  }
  return (
    <>
      <Tooltip label="About" withArrow>
        <ActionIcon variant="default" onClick={() => toggleAbout()}>
          <i className='bi bi-info-circle'></i>
        </ActionIcon>
      </Tooltip>
      <Drawer
        position="right"
        opened={open}
        onClose={() => setOpen((o) => !o)}
        title={<Title order={4}>About</Title>}
        padding="md"
        size={400}
        shadow="lg"
      >
        <Title order={5} mb="md">
          Todo App
        </Title>
      </Drawer>
    </>
  )
}
