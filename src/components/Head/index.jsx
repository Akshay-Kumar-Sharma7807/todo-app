import React from 'react'
import { Header, MediaQuery, Burger, Title, Group, ActionIcon, useMantineTheme, Tooltip } from "@mantine/core"
import ThemeToggle from "./ThemeToggle"
import Settings from "../Settings/"
import About from "../About/"
import Account from "../Account/"
import { useSpotlight } from '@mantine/spotlight'

export default function Head({ opened, setOpened }) {
  const theme = useMantineTheme();
  const spotlight = useSpotlight();

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


        <Title order={3}>Todo</Title>
        <Group ml="auto" m="md">
          <Tooltip label="Search" withArrow>
            <ActionIcon onClick={() => spotlight.openSpotlight()} variant="default">
              <i className='bi bi-search'></i>
            </ActionIcon>

          </Tooltip>
          <ThemeToggle />
          <Settings />
          <About />
          <Account />
        </Group>
      </div>
    </Header>
  )
}
