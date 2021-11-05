import React from 'react'


export default function Rings({props}) {
  return (
    < div >
      <img src={props.img} alt={`${props.label}`} />
      <h2>{props.label}</h2>
    </div >
  )
}
