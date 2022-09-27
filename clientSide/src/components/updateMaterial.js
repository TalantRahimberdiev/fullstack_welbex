
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState, } from 'react'
import { useUpdateMaterialMutation } from '../rtk/API'
import { clean } from '../rtk/slice1'

import { Input, Button } from '@mantine/core'

export default function UpdateMaterial({ data }) {
   const dispatch = useDispatch()
   const updated = useSelector(state => state.reducer1.updating)
   const material = data.find(bb => bb.id === updated)
   const [updateMaterial] = useUpdateMaterialMutation()

   const [title, setTitle] = useState('')
   const [quantity, setQuantity] = useState('')
   const [date, setDate] = useState('')
   const [distance, setDistance] = useState('')

   useEffect(() => {
      if (updated) {
         setTitle(material.title)
         setQuantity(material.quantity)
         setDate(material.date)
         setDistance(material.distance)
      }
   }, [updated])

   const update = async () => {
      const task = {
         details: material.id,
         title, quantity, date, distance
      }
      await updateMaterial(task)
   }

   return (
      <>
         <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
            <Input
               m={'xl'}
               value={title}
               onChange={e => setTitle(e.target.value)}
            />
            <Input
               m={'xl'}
               value={quantity}
               onChange={e => setQuantity(e.target.value)}
            />
            <Input
               m={'xl'}
               value={date}
               onChange={e => setDate(e.target.value)}
            />
            <Input
               m={'xl'}
               value={distance}
               onChange={e => setDistance(e.target.value)}
            />

         </div>
         <center><Button size='xs' color={'teal'} onClick={() => {
            update()
            dispatch(clean())
         }}>update</Button></center>
      </>
   )
}