import React from 'react'
import './footer.css'
import Marketplace from './marketplace/Marketplace'
import Resources from './resources/Resources'
import MyAccount from './myaccount/MyAccount'

function Footer() {
  return (
    <footer>
      <div>
        <div className="wrapperLogo">
          <div className="LogoFutter"></div>
          <h3 id="labelFooter">NFT.Ring</h3>
        </div>
        <div className="descriptionFooter">
          <span>The world’s first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital assets.</span>
        </div>
      </div>
      <Marketplace />
      <MyAccount />
      <Resources />
    </footer>
  )
}

export default Footer
