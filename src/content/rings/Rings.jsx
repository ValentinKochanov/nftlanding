import React from 'react'
import './rings.css'
import greenRing from '../../img/rings/greenRing.svg';
import blueRing from '../../img/rings/blueRing.svg';
import redRing from '../../img/rings/redRing.svg';
import purpleRing from '../../img/rings/purpleRing.svg';

function Rings() {
  return (
    <div className="rings">
      <ul>
        <li>
          <img src={greenRing} alt="Green Ring" />
          <h2>Green Ring</h2>
        </li>
        <li className="selected">
          <img src={redRing} alt="redRing" />
          <h2>Red Ring</h2>
        </li>
        <li>
          <img src={purpleRing} alt="purpleRing" />
          <h2>Purple Ring</h2>
        </li>
        <li>
          <img src={blueRing} alt="blueRing" />
          <h2>Blue Ring</h2>
        </li>
      </ul>
    </div>
  )
}

export default Rings