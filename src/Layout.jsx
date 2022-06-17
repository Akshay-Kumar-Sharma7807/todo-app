import React, { useState } from 'react';
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  Title,
  Group,
  ActionIcon,
} from '@mantine/core';
import Todos from './components/Todos/';
import Navigation from './components/Navigation/Navigation';
import { Routes, Route } from 'react-router-dom';
import Settings from "./components/Settings"
import Login from "./components/Login";


export default function Layout() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  return (
    <AppShell
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      fixed
      navbar={
        <Navigation opened={opened}>
          <Text>Application navbar</Text>
        </Navigation>
      }
      // aside={
      //   <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
      //     <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
      //       <Text>Application sidebar</Text>
      //     </Aside>
      //   </MediaQuery>
      // }
      // footer={
      //   <Footer height={60} p="md">
      //     Application footer
      //   </Footer>
      // }
      header={
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
              <ActionIcon><i className="bi bi-sun" /></ActionIcon>
              <ActionIcon><i className="bi bi-gear" /></ActionIcon>
              <ActionIcon><i className="bi bi-info-circle" /></ActionIcon>
              <ActionIcon><i className="bi bi-person-circle" /></ActionIcon>
            </Group>
          </div>
        </Header>
      }
    >
      <Routes>
        <Route path="/tasks/my-day" element={
          <Todos />
        } />
        <Route path="/tasks/important" element={<div>Important</div>} />
        <Route path="/tasks/planned" element={<div>Planned</div>} />
        <Route path="/tasks/all" element={<div>all</div>} />
        <Route path="/tasks/completed" element={<div>Completed</div>} />
        <Route path="/tasks/assigned-to-me" element={<div>Assigned To Me</div>} />
        <Route path="/tasks/inbox" element={<div>Tasks</div>} />

        <Route path="/settings" element={<Settings />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </AppShell>
  );
}