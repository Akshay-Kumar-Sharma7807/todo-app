import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { logEvent } from "firebase/analytics";
import { analytics } from "./firebase";
import { MantineProvider } from '@mantine/core';

logEvent(analytics, 'notification_received');

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MantineProvider
      theme={{
        // Override any other properties from default theme
        colorScheme: 'dark',
        fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue',
        // spacing: { xs: 15, sm: 20, md: 25, lg: 30, xl: 40 },
      }}
      withGlobalStyles
      withNormalizeCSS
    >
      <App />
    </MantineProvider>
  </React.StrictMode>
)
