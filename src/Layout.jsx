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
          </div>
        </Header>
      }
    >
      <Routes>
        <Route path="" element={
          <Todos />
          // <div className="container">
          //   <Form todos={todos} setTodos={setTodos} />
          //   <List todos={todos} deleteTodo={(todoIndex) => {
          //     const newTodos = todos.filter((_, index) => index !== todoIndex);
          //     setTodos(newTodos);
          //   }}
          //     setTodos={setTodos}
          //   />
          // </div>
        } />
        <Route path="/settings" element={<Settings />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </AppShell>
  );
}