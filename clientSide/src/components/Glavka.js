
import { Routes, Route, } from "react-router-dom"
import AddMaterial from "./addMaterial"
import Faq from "./faq"
import Filtered from "./filtered"
import Main from "./main"

export default function Glavka() {

   return (
      <Routes>
         <Route path="/" element={<Main />} />
         <Route path="add" element={<AddMaterial />} />
         <Route path="filter" element={<Filtered/>} />
         <Route path="FAQ" element={<Faq/>} />
      </Routes>
   )
}