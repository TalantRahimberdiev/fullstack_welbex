import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { API } from './API'
import reducer1 from './slice1'

export const store = configureStore({
  reducer: {
    [API.reducerPath]: API.reducer,
    reducer1,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(API.middleware),
})

setupListeners(store.dispatch)