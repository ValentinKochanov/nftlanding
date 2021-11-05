import React from 'react'
import './content.css';
import RingsContainer from './rings/RingsContainer'
import SalesContainer from './sales/SalesContainer'
import Cripto from './cripto/Cripto'

export const Content = () => {
  return (
    <div>
      <div className="scrinSecond">
        <div className="titleScrinSecond">
          <p>New Generation of Online Shopping</p>
        </div>
        <div className="descriptionScrinSecond">
          <p>This NFT website is a website that features buying and selling, news and blogs. Designed with a minimalist and informative concept</p>
        </div>
        <RingsContainer />
        <div className="titleScrinSecond">
          <p>Exclusive NFT.Ring drops</p>
        </div>
        <div className="descriptionScrinSecond">
          <p>This NFT website is a website that features buying and selling, news and blogs. Designed with a minimalist and informative concept</p>
        </div>
        <SalesContainer />
      </div>
      <div className="scrinThird">
        <div id="titleScrinThird">
          <p>Browse by category</p>
        </div>
        <div id="descriptionScrinThird">
          <p>This NFT website is a website that features buying and selling, news and blogs. Designed with a minimalist and informative concept</p>
        </div>
        <Cripto />
        <div className="scrinFourth">
          <div id="titleScrinFourth">
            <p>Stay in the loop</p>
          </div>
          <div id="descriptionScrinFourth">
            <p>Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating NFT.Ring</p>
          </div>
          <div>
            <form>
              <input id="Email" type="text" placeholder="Your Email Address" />
              <button className="BtnLogin">Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
