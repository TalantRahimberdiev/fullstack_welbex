
import { useAddMaterialMutation } from '../rtk/API'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Input, Button } from '@mantine/core'

export default function AddMaterial() {

   const navigate = useNavigate();

   const [title, setTitle] = useState('')
   const [quantity, setQuantity] = useState('')
   const [date, setDate] = useState('')
   const [distance, setDistance] = useState('')

   const [AddMaterial, result] = useAddMaterialMutation()

   const add = async () => {
      const task = {
         title,
         quantity,
         date,
         distance
      }
      await AddMaterial(task)
      navigate('/')
   }

   return (
      <>
         <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
            <Input
               m={'xl'}
               placeholder="title"
               onChange={e => setTitle(e.target.value)}
            />
            <Input
               m={'xl'}
               placeholder="quantity"
               onChange={e => setQuantity(e.target.value)}
            />
            <Input
               m={'xl'}
               placeholder="date"
               onChange={e => setDate(e.target.value)}
            />
            <Input
               m={'xl'}
               placeholder="distance"
               onChange={e => setDistance(e.target.value)}
            />
         </div>
         <center><Button color={'teal'} size='xs' onClick={() => add()}>add</Button></center>
      </>
   )
}