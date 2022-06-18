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
import { Routes, Route, Navigate } from 'react-router-dom';
import Settings from "./components/Settings";
import Login from "./components/Login";
import Head from "./components/Head/";
import Important from "./components/Todos/Important/";


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
        <Head setOpened={setOpened} opened={opened} />
      }
    >
      <Routes>
        <Route path="/" element={
          <Navigate to="/tasks/my-day" />
        } />
        <Route path="/tasks/*" element={
          <Todos />
        } />
        {/* <Route path="/tasks/important" element={<Important />} /> */}
        {/* <Route path="/tasks/planned" element={<div>Planned</div>} /> */}
        {/* <Route path="/tasks/all" element={<div>all</div>} /> */}
        {/* <Route path="/tasks/completed" element={<div>Completed</div>} /> */}
        {/* <Route path="/tasks/assigned-to-me" element={<div>Assigned To Me</div>} /> */}
        {/* <Route path="/tasks/inbox" element={<div>Tasks</div>} /> */}

        <Route path="/settings" element={<Settings />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </AppShell>
  );
}