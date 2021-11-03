import React from 'react'
import './cripto.css'
import blockchainLogo from '../../img/cripto/blockchainLogo.svg';
import BTCLogo from '../../img/cripto/BTCLogo.svg';
import ethereumLogo from '../../img/cripto/ethereumLogo.svg';
import shibaLogo from '../../img/cripto/shibaLogo.svg';
import TetherLogo from '../../img/cripto/TetherLogo.svg';

function Cripto() {
  return (
    <div className="cripto">
      <ul>
        <li>
          <img src={blockchainLogo} alt="blockchainLogo" />
        </li>
        <li>
          <img src={BTCLogo} alt="BTCLogo" />
        </li>
        <li>
          <img src={ethereumLogo} alt="ethereumLogo" />
        </li>
        <li>
          <img src={shibaLogo} alt="shibaLogo" />
        </li>
        <li>
          <img src={TetherLogo} alt="TetherLogo" />
        </li>
      </ul>
    </div>
  )
}

export default Cripto
