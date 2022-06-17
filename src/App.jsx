import { useState, useEffect } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./Layout"
import { MantineProvider, ColorSchemeProvider } from '@mantine/core';
import { useHotkeys, useLocalStorage } from '@mantine/hooks';

function App() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || [])

  useEffect(() => {
    // console.log("change in todos", todos);
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  const [colorScheme, setColorScheme] = useLocalStorage({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  useHotkeys([['mod+J', () => toggleColorScheme()]]);

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
        <Router>
          <div className={"App"}>
            <Layout />
          </div>
        </Router>
      </MantineProvider>
    </ColorSchemeProvider>
  )
}

export default App
