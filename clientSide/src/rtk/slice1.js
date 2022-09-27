
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   updating: 0,
   sortTarget: '',
   selected: '',
   condition: '',
   val: '',
}

export const slice1 = createSlice({
   name: 'crud',
   initialState,
   reducers: {
      update: (state, action) => {
         state.updating = action.payload
      },
      clean: state => {
         state = { ...initialState }
      },
      getSortTarget: (state, action) => {
         state.sortTarget = action.payload
      },
      getSelected: (state, action) => {
         state.selected = action.payload
      },
      getCondition: (state, action) => {
         state.condition = action.payload
      },
      getVal: (state, action) => {
         state.val = action.payload
      },
   }
})

export const { update, clean, getSortTarget, getCondition, getVal, getSelected } = slice1.actions
export default slice1.reducer