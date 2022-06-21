import { ActionIcon, Avatar, Anchor, Container, Drawer, Group, Switch, Text, Title, Tooltip, Button, ScrollArea } from '@mantine/core'
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
        size={400}
        padding="md"
        shadow="lg"
        title={<Title order={3}>About</Title>}
        sx={{
          "& .mantine-Drawer-drawer": {
            overflowY: "auto",
          }
        }}
      >
        {/* <ScrollArea style={{ height: "100vh" }}> */}
        <Title order={5} mb="md">
          Todo App
        </Title>
        <Text>
          Hello! In this fully featured and blazingly fast todo app you can
          manage your daily tasks. This is a PWA (Progressive Web App) which
          means it can be installed on your device. You can quickly access your
          tasks and filter or sort them if you want to.
        </Text>
        <Title my="md" order={5}>About Me</Title>
        <Group position="center">
          <Avatar src="https://i.ibb.co/m6B7PSv/IMG-20200229-101104.jpg" radius={100} size={200} alt="Akshay Kumar Sharma" />
          <Title order={4}>Akshay Kumar Sharma</Title>
        </Group>
        <Text>Email: <Anchor href="mailto:sharmaakshaykumar7807@gmail.com">sharmaakshaykumar7807@gmail.com</Anchor></Text>
        <Text>Github: <Anchor href="https://github.com/Akshay-Kumar-Sharma7807" target="_blank">Akshay-Kumar-Sharma7807</Anchor></Text>
        <Button
          my="md"
          component='a'
          leftIcon={<i className="bi bi-discord" />}
          href="https://discord.gg/s5SSnEcC"
          target="_blank"
          sx={(theme) => {
            backgroundColor: theme.colors.indigo
          }}
        >Chat on Discord</Button>
        {/* </ScrollArea> */}
      </Drawer>
    </>
  )
}
