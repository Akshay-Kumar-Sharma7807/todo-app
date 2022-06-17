import React from 'react'
import { Header, MediaQuery, Burger, Title, Group, ActionIcon, useMantineTheme, Tooltip } from "@mantine/core"
import ThemeToggle from "./ThemeToggle"
import Settings from "../Settings/"
import About from "../About/"
import Account from "../Account/"

export default function Head({ opened, setOpened }) {
  const theme = useMantineTheme();

  return (
    <Header height={60} p="sm">
      <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
          <Burger
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            size="sm"
            color={theme.colors.gray[6]}
            mr="xl"
          />
        </MediaQuery>

        <Title order={3}>Todo App</Title>
        <Group ml="auto" m="md">
          <ThemeToggle />
          <Settings />
          <About />
          <Account />
        </Group>
      </div>
    </Header>
  )
}
