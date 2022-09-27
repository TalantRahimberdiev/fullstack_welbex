
import { MediaQuery, Text, Burger } from "@mantine/core"
import { useContext } from "react"
import { Context_1 } from '../app_shell'
import DarkLight from "./darkLight"

export default function Heading() {
   const { opened, setOpened, theme } = useContext(Context_1)

   return (
      <div style={{ display: 'flex', alignItems: 'center', height: '100%', justifyContent: 'space-around' }}>
         <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
            <Burger opened={opened} onClick={() => setOpened((o) => !o)} size="sm" color={theme.colors.gray[6]} mr="xl" />
         </MediaQuery>
         <Text size={'sm'}>практическое задание №1 для WelbeX</Text>
         <DarkLight />
      </div>
   )
}