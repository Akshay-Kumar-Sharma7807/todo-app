import React from 'react'
import { Header, MediaQuery, Burger, Title, Group, ActionIcon, useMantineTheme, Tooltip } from "@mantine/core"
import { useMantineColorScheme } from '@mantine/core';

export default function Head({ opened, setOpened }) {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';
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
          <Tooltip label="Ctrl + J" withArrow>
            <ActionIcon
              variant="default"
              color={dark ? 'yellow' : 'blue'}
              onClick={() => toggleColorScheme()}
              title="Toggle color scheme"
            >
              {dark ? <i className="bi bi-sun" size={18} /> : <i className="bi bi-moon-stars" size={18} />}
            </ActionIcon>
          </Tooltip>
          <Tooltip label="Settings" withArrow>
            <ActionIcon variant="default"><i className="bi bi-gear" /></ActionIcon>
          </Tooltip>
          <Tooltip label="About" withArrow>
            <ActionIcon variant="default"><i className="bi bi-info-circle" /></ActionIcon>
          </Tooltip>
          <Tooltip label="Account" withArrow>
            <ActionIcon variant="default"><i className="bi bi-person-circle" /></ActionIcon>
          </Tooltip>
        </Group>
      </div>
    </Header>
  )
}
