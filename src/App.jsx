import { useState, useEffect } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./Layout"
import { MantineProvider, ColorSchemeProvider } from '@mantine/core';
import { useHotkeys, useLocalStorage } from '@mantine/hooks';
import ReloadPrompt from "./components/ReloadPrompt"

function App() {
  const [todos, setTodos] = useLocalStorage({
    key: 'todos',
    defaultValue: [],
  });

  // if (!("Notification" in window)) {
  //   console.log("This browser does not support notifications.");
  // } else {
  //   if (Notification.permission !== "granted") {
  //     Notification.requestPermission()
  //       .then((permission) => {
  //         Notification.permission = permission
  //       })
  //   }
  // }

  const [colorScheme, setColorScheme] = useLocalStorage({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
  });

  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  useHotkeys([['mod+J', () => toggleColorScheme()]]);

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
        <Router>
          <div className={"App"}>
            <ReloadPrompt />
            <Layout />
          </div>
        </Router>
      </MantineProvider>
    </ColorSchemeProvider>
  )
}

export default App
