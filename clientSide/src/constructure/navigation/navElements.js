
import { useState, useEffect } from 'react'
import { Box, NavLink } from '@mantine/core'
import { Link, useNavigate } from 'react-router-dom'
import navData from './navData'

import { useDispatch} from 'react-redux'
import { getSortTarget,getVal } from '../../rtk/slice1'

import { Context_1 } from "../app_shell"
import { useContext } from "react"


export default function NavElements() {
   const navigate=useNavigate()
   const dispatch = useDispatch()
   const { opened, setOpened } = useContext(Context_1)
   const [active, setActive] = useState();
   const [activeChild, setActiveChild] = useState()

   useEffect(() => {
      setActiveChild()
   }, [active])

   const items = navData.map((item, index) => (
      <NavLink
         component={Link}
         to={`/${item.link}`}
         key={item.label}
         active={index === active}
         label={item.label}
         rightSection={item.rightSection}
         onClick={() => {
            setActive(index)
            item.label !== 'Сортировка' && setOpened(!opened)
         }}
         color="teal"
      >
         {
            item.children && item.children.map((child, i) => (
               <NavLink
                  key={child.label}
                  active={i === activeChild}
                  label={child.label}
                  onClick={() => {
                     dispatch(getSortTarget(child.link))
                     dispatch(getVal(''))
                     setActiveChild(i)
                     setActive(index)
                     setOpened(!opened)
                     navigate('/')
                  }}
                  variant={'subtle'}
               />))
         }
      </NavLink>
   ))

   return <Box>{items}</Box>
}