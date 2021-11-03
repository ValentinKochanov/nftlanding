import React from 'react'
import './sales.css'
import picture1 from '../../img/picture/picture1.svg';
import picture2 from '../../img/picture/picture2.svg';
import picture3 from '../../img/picture/picture3.svg';
import picture4 from '../../img/picture/picture4.svg';
import picture5 from '../../img/picture/picture5.svg';
import picture6 from '../../img/picture/picture6.svg';
import picture7 from '../../img/picture/picture7.svg';
import picture8 from '../../img/picture/picture8.svg';
import vectorSmall from '../../img/VectorSmall.svg';
import avatarCodyFisher from '../../img/avatar/CodyFisher.svg';
import avatarDarrellSteward from '../../img/avatar/DarrellSteward.svg';
import avatarEstherHoward from '../../img/avatar/EstherHoward.svg';
import avatarKristinWatson from '../../img/avatar/KristinWatson.svg';
import avatarMarvinMcKinney from '../../img/avatar/MarvinMcKinney.svg';
import avatarSavannahNguyen from '../../img/avatar/SavannahNguyen.svg';

function Sales() {
  return (
    <div className='sales'>
      <ul>
        <li>
          <img src={picture1} alt="picturesales" />
          <p className="label">Theresa Webb</p>
          <div className="price">
            <img src={vectorSmall} alt="vectorSmall" />
            <span>$475.22</span>
          </div>
          <div className="salesman">
            <img src={avatarCodyFisher} alt="avatarCodyFisher" />
            <p>CodyFisher</p>
          </div>
        </li>
        <li>
          <img src={picture2} alt="picturesales" />
          <p className="label">Eleanor Pena</p>
          <div className="price">
            <img src={vectorSmall} alt="vectorSmall" />
            <span>$710.68</span>
          </div>
          <div className="salesman">
            <img src={avatarDarrellSteward} alt="avatarDarrellSteward" />
            <p>DarrellSteward</p>
          </div>
        </li>
        <li>
          <img src={picture3} alt="picturesales" />
          <p className="label">Darlene Robertson</p>
          <div className="price">
            <img src={vectorSmall} alt="vectorSmall" />
            <span>$928.41</span>
          </div>
          <div className="salesman">
            <img src={avatarEstherHoward} alt="avatarEstherHoward" />
            <p>EstherHoward</p>
          </div>
        </li>
        <li>
          <img src={picture4} alt="picturesales" />
          <p className="label">Bessie Cooper</p>
          <div className="price">
            <img src={vectorSmall} alt="vectorSmall" />
            <span>$778.35</span>
          </div>
          <div className="salesman">
            <img src={avatarKristinWatson} alt="avatarKristinWatson" />
            <p>KristinWatson</p>
          </div>
        </li>
        <li>
          <img src={picture5} alt="picturesales" />
          <p className="label">Guy Hawkins</p>
          <div className="price">
            <img src={vectorSmall} alt="vectorSmall" />
            <span>$739.65</span>
          </div>
          <div className="salesman">
            <img src={avatarMarvinMcKinney} alt="avatarMarvinMcKinney" />
            <p>MarvinMcKinney</p>
          </div>
        </li>
        <li>
          <img src={picture6} alt="picturesales" />
          <p className="label">Savannah Nguyen</p>
          <div className="price">
            <img src={vectorSmall} alt="vectorSmall" />
            <span>$105.55</span>
          </div>
          <div className="salesman">
            <img src={avatarSavannahNguyen} alt="avatarSavannahNguyen" />
            <p>SavannahNguyen</p>
          </div>
        </li>
        <li>
          <img src={picture7} alt="picturesales" />
          <p className="label">Wade Warren</p>
          <div className="price">
            <img src={vectorSmall} alt="vectorSmall" />
            <span>$396.84</span>
          </div>
          <div className="salesman">
            <img src={avatarCodyFisher} alt="avatarCodyFisher" />
            <p>CodyFisher</p>
          </div>
        </li>
        <li>
          <img src={picture8} alt="picturesales" />
          <p className="label">Devon Lane</p>
          <div className="price">
            <img src={vectorSmall} alt="vectorSmall" />
            <span>$928.41</span>
          </div>
          <div className="salesman">
            <img src={avatarDarrellSteward} alt="avatarDarrellSteward" />
            <p>DarrellSteward</p>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Sales
