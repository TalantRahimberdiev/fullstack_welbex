import { useState, createContext } from 'react';
import { AppShell, useMantineTheme } from '@mantine/core';

import MainNav from './navigation/mainNav';
import MainHead from './head/mainHead';
import MainFoot from './foot/mainFoot';

import Glavka from '../components/Glavka';

export const Context_1 = createContext()

export default function App_Shell() {
   const theme = useMantineTheme()
   const [opened, setOpened] = useState(false)

   return (
      <AppShell
         styles={{
            main: {
               background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
            },
         }}
         navbarOffsetBreakpoint="sm" asideOffsetBreakpoint="sm"
         header={<Context_1.Provider value={{ opened, setOpened, theme }}><MainHead /></Context_1.Provider>}
         navbar={<Context_1.Provider value={{ opened, setOpened }}><MainNav /></Context_1.Provider>}
         footer={<MainFoot />}
      >
         <Glavka />
         
      </AppShell>
   )
}