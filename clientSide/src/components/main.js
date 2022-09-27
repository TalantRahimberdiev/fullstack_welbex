
import DynamTable from "./dynamTable"
import { useListQuery } from "../rtk/API"
import { useSelector } from "react-redux"
import UpdateMaterial from "./updateMaterial"

export default function Main() {

   const { data, error, isLoading } = useListQuery()
   const updating = useSelector(state => state.reducer1.updating)
   const sortTarget = useSelector(state => state.reducer1.sortTarget)

   const val = useSelector(state => state.reducer1.val)
   const selected = useSelector(state => state.reducer1.selected)
   const condition = useSelector(state => state.reducer1.condition)

   let copy = []
   const transfer = () => {
      switch (condition) {
         case '=':
            copy = data.filter(bb => bb[selected] == val)
            break
         case '>':
            copy = data.filter(bb => bb[selected] > +val)
            break
         case '<':
            copy = data.filter(bb => bb[selected] < +val)
            break
         case 'includes':
            copy = data.filter(bb => {
               let tmp = String(bb[selected])
               return tmp.includes(val)
            })
            break
      }
      console.log(copy)
      return copy
   }
   if (val && data) {
      transfer()
   }

   const sortBy = fn => {
      const cmp = (a, b) => -(a < b) || +(a > b)
      return (a, b) => cmp(fn(a), fn(b))
   }
   const getTitle = param => param.title
   const sortByTitle = sortBy(getTitle)

   const props = data?.map(bb => bb)
   if (sortTarget === 'title' && props) {
      props.sort(sortByTitle)
   }
   else if (sortTarget && props) {
      props.sort((a, b) => a[sortTarget] - b[sortTarget])
   }
   return (
      <div>
         {updating && props ? <UpdateMaterial data={props} /> : props && !val ? <DynamTable param={props} /> : val && copy.length !== 0 ? <DynamTable param={copy} /> : <h2>not found</h2>}
      </div>
   )
}