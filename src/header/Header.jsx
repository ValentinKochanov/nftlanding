import React from 'react'
import './header.css';
import vector from '../img/vector.svg';
import photo from '../img/Photo.svg';

export const Header = (props) => {
  return (
    <div className="scrinFirst">
      <header className="AppHeader">
        <div className="Logo"></div>
        <h3>NFT.Ring</h3>
        <div className="HeaderContainer">
          <ul className="HeaderUl">
            <li>Market</li>
            <li>Activity</li>
            <li>Feature</li>
            <li>Community</li>
          </ul>
          <button className="BtnLogin">Login</button>
        </div> 
      </header>
      <div id="titleScrinFirst">
        <p>The Home of Minimalist Buying and Selling</p>
      </div>
      <div id="descriptionScrinFirst">
        <p>This NFT website is a website that features buying and selling, news and blogs. Designed with a minimalist and informative concept</p>
      </div>
      <div className="BtnGroup">
        <button className="BtnExplore">Explore</button>
        <button className="BtnCreate">Create</button>
      </div>
      <div className="InfoWindow">
        <h2>Current price</h2>
        <div className="vector">
          <img src={vector} alt="Vector"/>
          <span className="value">1.98</span>
          <span className="price">($5,489.54)</span>
        </div>
        <div className="name">
          <img src={photo} alt="photoUser" />
          <p>Wade Warren</p>
        </div>
      </div>
    </div>
  )
}
