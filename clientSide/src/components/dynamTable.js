
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { update } from '../rtk/slice1'

import { Table, Pagination } from '@mantine/core'
import uuid from 'react-uuid'
import { useDeleteMaterialMutation } from '../rtk/API'


export default function DynamTable({ param }) {
   const [pages, setPages] = useState(1)
   const dispatch = useDispatch()
   const [deleteMaterial] = useDeleteMaterialMutation()

   let limit = param.slice((pages - 1) * 3, pages * 3)
   useEffect(() => {
      limit = param.slice((pages - 1) * 3, pages * 3)
   }, [pages, limit])

   return (
      <div>
         <Table fontSize="sm" highlightOnHover>
            <thead>
               <tr>
                  {
                     Object.keys(param[0]).map(key => <th style={{ textAlign: 'center' }} key={uuid()}>{key === 'id' ? 'delete' : key}</th>)
                  }
               </tr>
            </thead>
            <tbody>
               {
                  limit.map(bb => (
                     <tr style={{ textAlign: 'center' }} key={uuid()}>
                        {
                           Object.values(bb).map((item, index) => <td onClick={() => index === 0 ? deleteMaterial(item) : dispatch(update(bb.id))} style={{ textDecoration: 'underline' }} key={uuid()}>{item}</td>)
                        }
                     </tr>
                  ))
               }
            </tbody>
         </Table>
         <center><Pagination onChange={page => setPages(page)} m={'xl'} total={Math.floor(param.length / 3)} siblings={2} initialPage={pages} /></center>
      </div>
   )
}