import React from 'react'
import './sales.css'
import vectorSmall from '../../img/VectorSmall.svg';

function Sales({props}) {
  return (
    <>
      <img src={props.picture} alt={`${props.label}`} />
      <p className="label">{props.label}</p>
      <div className="price">
        <img src={vectorSmall} alt="vectorSmall" />
        <span>{props.price}</span>
      </div>
      <div className="salesman">
        <img src={props.avatar} alt={`${props.avatar}`} />
        <p>{props.name}</p>
      </div>
    </>
  )
}

export default Sales
