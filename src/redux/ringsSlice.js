import { createSlice } from '@reduxjs/toolkit'
import * as ring from '../img/rings/index'

export const ringsSlice = createSlice({
  name: 'rings',
  initialState: {
    rings: [
      {img: `${ring.greenRing}`, label:"Green Ring"},
      {img: `${ring.blueRing}`, label:"Blue Ring"},
      {img: `${ring.redRing}`, label:"Red Ring"},
      {img: `${ring.purpleRing}`, label:"Purple Ring"}
    ],
    selectedRing: ""
  },
  reducers: {
    selected: (state, action) => {
      state.selectedRing = action.payload
    }
  },
})

export const { selected } = ringsSlice.actions

export default ringsSlice.reducer