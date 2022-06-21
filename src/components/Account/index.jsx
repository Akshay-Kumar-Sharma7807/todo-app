import { ActionIcon, Aside, Container, Drawer, Group, Switch, Text, Title, Tooltip } from '@mantine/core'
import React, { useState } from 'react'

export default function Account() {
  const [open, setOpen] = useState();
  const toggleAccount = () => {
    setOpen((o) => !o)
  }
  return (
    <>
      <Tooltip label="Account" withArrow>
        <ActionIcon variant="default" onClick={() => toggleAccount()}>
          <i className='bi bi-person-circle'></i>
        </ActionIcon>
      </Tooltip>
      <Drawer
        position="right"
        opened={open}
        onClose={() => setOpen((o) => !o)}
        title={<Title order={4}>Account</Title>}
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
          Hello!
        </Title>
      </Drawer>
    </>
  )
}
