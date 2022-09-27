
import { Provider } from "react-redux";
import { store } from './rtk/store'
import { useState, } from 'react';
import { MantineProvider, ColorSchemeProvider } from '@mantine/core';
import App_Shell from "./constructure/app_shell"
import { Routes, Route, BrowserRouter } from 'react-router-dom'


export default function App() {
  const [colorScheme, setColorScheme] = useState('light');
  const toggleColorScheme = (value) => setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))

  return (
    <BrowserRouter>
      <Provider store={store}>
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
          <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
            <App_Shell />
          </MantineProvider>
        </ColorSchemeProvider>
      </Provider>
    </BrowserRouter >
  )
}