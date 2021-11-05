import { configureStore } from '@reduxjs/toolkit'
import ringsSlice from './ringsSlice'
import salesSlice from './salesSlice'

export default configureStore({
  reducer: {
    rings: ringsSlice,
    sales: salesSlice
  },
})