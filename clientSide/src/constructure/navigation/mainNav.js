
import { Navbar, Text, ScrollArea } from "@mantine/core"
import NavElements from "./navElements"
import { Context_1 } from "../app_shell"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"

export default function MainNav() {

   const { opened } = useContext(Context_1)
   const navigate=useNavigate()
   return (
      <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
         <Text onClick={()=>navigate('/')}>Основные разделы:</Text>
         <ScrollArea  mx="-xs" px="xs" scrollbarSize={5} scrollHideDelay={0}>
            {/* ... content */}<NavElements />
         </ScrollArea>
      </Navbar>
   )
}