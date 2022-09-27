
import { useNavigate } from 'react-router-dom'
import { Select, Input, Button } from '@mantine/core'
import { getVal, getSelected, getCondition } from '../rtk/slice1'
import { useDispatch, useSelector } from 'react-redux'

export default function Filtered() {
   const dispatch = useDispatch()
   const val = useSelector(state => state.reducer1.val)
   const selected = useSelector(state => state.reducer1.selected)
   const condition = useSelector(state => state.reducer1.condition)
   const navigate = useNavigate()
   return (
      <div>
         <Select
            m={'xl'}
            label="Выбор колонки, по которой будет фильтрация"
            placeholder="Pick one"
            value={selected}
            onChange={(selected) => dispatch(getSelected(selected))}
            data={[
               { value: 'title', label: 'название' },
               { value: 'quantity', label: 'количество' },
               { value: 'distance', label: 'расстояние' },
            ]}
         />
         {
            selected && (
               <Select
                  m={'xl'}
                  label="Выбор условия (равно, содержит, больше, меньше)"
                  placeholder="Pick one"
                  value={condition}
                  onChange={condition => dispatch(getCondition(condition))}
                  data={[
                     { value: '=', label: 'равно' },
                     { value: 'includes', label: 'содержит' },
                     { value: '>', label: 'больше' },
                     { value: '<', label: 'меньше' },
                  ]}
               />
            )
         }
         {
            condition && (
               <Input.Wrapper
                  m={'xl'}
                  withAsterisk
                  label="Поле для ввода значения для фильтрации"
               >
                  <Input onChange={e => dispatch(getVal(e.target.value))} placeholder="значение" />
               </Input.Wrapper>
            )
         }
         {
            val && <center><Button onClick={() => navigate('/')} color={'dark'} size={'xs'} >filter</Button></center>
         }
      </div>
   )
}