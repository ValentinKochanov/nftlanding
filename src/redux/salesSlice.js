import { createSlice } from '@reduxjs/toolkit'
import * as pic from '../img/picture/index'
import * as avatar from '../img/avatar/index'

export const salesSlice = createSlice({
  name: 'sales',
  initialState: {
    sales: [
      {picture: `${pic.picture1}`, label: "Theresa Webb", price: "$475.22", avatar: `${avatar.avatarCodyFisher}`, name:"Cody Fisher"},
      {picture: `${pic.picture2}`, label: "Eleanor Pena", price: "$710.68", avatar: `${avatar.avatarDarrellSteward}`, name:"Darrell Steward"},
      {picture: `${pic.picture3}`, label: "Darlene Robertson", price: "$928.41", avatar: `${avatar.avatarEstherHoward}`, name:"Esther Howard"},
      {picture: `${pic.picture4}`, label: "Bessie Cooper", price: "$778.35", avatar: `${avatar.avatarKristinWatson}`, name:"Kristin Watson"},
      {picture: `${pic.picture5}`, label: "Guy Hawkins", price: "$739.65", avatar: `${avatar.avatarMarvinMcKinney}`, name:"Marvin McKinney"},
      {picture: `${pic.picture6}`, label: "Savannah Nguyen", price: "$105.55", avatar: `${avatar.avatarSavannahNguyen}`, name:"Savannah Nguyen"},
      {picture: `${pic.picture7}`, label: "Wade Warren", price: "$396.84", avatar: `${avatar.avatarCodyFisher}`, name:"Cody Fisher"},
      {picture: `${pic.picture8}`, label: "Devon Lane", price: "$928.41", avatar: `${avatar.avatarDarrellSteward}`, name:"Darrell Steward"}
    ]
  }
})

export default salesSlice.reducer