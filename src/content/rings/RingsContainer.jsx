import React from 'react'
import Rings from './Rings'
import { useSelector, useDispatch } from 'react-redux'
import { selected } from '../../redux/ringsSlice'
import './rings.css'

function RingsContainer() {
  const rings = useSelector((state) => state.rings.rings)
  const selectedRing = useSelector((state) => state.rings.selectedRing)

  const dispatch = useDispatch()

  let ringsElem = rings.map(ring => <li 
    className={selectedRing === ring.label ? "selected" : null} 
    key={ring.label} 
    onClick={() => dispatch(selected(ring.label))}>
      <Rings props={ring}/></li>)
  return (
    <div className="rings">
          <ul>
              {ringsElem}
          </ul>
    </div>
  )
}

export default RingsContainer
