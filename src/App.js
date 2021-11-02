import './App.css';
import vector from './img/vector.svg';
import photo from './img/Photo.svg';
import greenRing from './img/rings/greenRing.svg';
import blueRing from './img/rings/blueRing.svg';
import redRing from './img/rings/redRing.svg';
import purpleRing from './img/rings/purpleRing.svg';
import picture1 from './img/picture/picture1.svg';
import picture2 from './img/picture/picture2.svg';
import picture3 from './img/picture/picture3.svg';
import picture4 from './img/picture/picture4.svg';
import picture5 from './img/picture/picture5.svg';
import picture6 from './img/picture/picture6.svg';
import picture7 from './img/picture/picture7.svg';
import picture8 from './img/picture/picture8.svg';
import vectorSmall from './img/VectorSmall.svg';
import avatarCodyFisher from './img/avatar/CodyFisher.svg';
import avatarDarrellSteward from './img/avatar/DarrellSteward.svg';
import avatarEstherHoward from './img/avatar/EstherHoward.svg';
import avatarKristinWatson from './img/avatar/KristinWatson.svg';
import avatarMarvinMcKinney from './img/avatar/MarvinMcKinney.svg';
import avatarSavannahNguyen from './img/avatar/SavannahNguyen.svg';
import blockchainLogo from './img/cripto/blockchainLogo.svg';
import BTCLogo from './img/cripto/BTCLogo.svg';
import ethereumLogo from './img/cripto/ethereumLogo.svg';
import shibaLogo from './img/cripto/shibaLogo.svg';
import TetherLogo from './img/cripto/TetherLogo.svg';


function App() {
  return (
    <div className="App">
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
      <div className="scrinSecond">
        <div className="titleScrinSecond">
          <p>New Generation of Online Shopping</p>
        </div>
        <div className="descriptionScrinSecond">
          <p>This NFT website is a website that features buying and selling, news and blogs. Designed with a minimalist and informative concept</p>
        </div>
        <div className="rings">
          <ul>
            <li>
              <img src={greenRing} alt="Green Ring"/>
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
        <div className="titleScrinSecond">
          <p>Exclusive NFT.Ring drops</p>
        </div>
        <div className="descriptionScrinSecond">
          <p>This NFT website is a website that features buying and selling, news and blogs. Designed with a minimalist and informative concept</p>
        </div>
        <div className='sales'>
          <ul>
            <li>
              <img src={picture1} alt="picturesales"/>
              <p className="label">Theresa Webb</p>
              <div className="price">
                <img src={vectorSmall} alt="vectorSmall"/>
                <span>$475.22</span>
              </div>
              <div className="salesman">
                <img src={avatarCodyFisher} alt="avatarCodyFisher"/>
                <p>CodyFisher</p>
              </div>
            </li>
            <li>
              <img src={picture2} alt="picturesales"/>
              <p className="label">Eleanor Pena</p>
              <div className="price">
                <img src={vectorSmall} alt="vectorSmall"/>
                <span>$710.68</span>
              </div>
              <div className="salesman">
                <img src={avatarDarrellSteward} alt="avatarDarrellSteward"/>
                <p>DarrellSteward</p>
              </div>
            </li>
            <li>
              <img src={picture3} alt="picturesales"/>
              <p className="label">Darlene Robertson</p>
              <div className="price">
                <img src={vectorSmall} alt="vectorSmall"/>
                <span>$928.41</span>
              </div>
              <div className="salesman">
                <img src={avatarEstherHoward} alt="avatarEstherHoward"/>
                <p>EstherHoward</p>
              </div>
            </li>
            <li>
              <img src={picture4} alt="picturesales"/>
              <p className="label">Bessie Cooper</p>
              <div className="price">
                <img src={vectorSmall} alt="vectorSmall"/>
                <span>$778.35</span>
              </div>
              <div className="salesman">
                <img src={avatarKristinWatson} alt="avatarKristinWatson"/>
                <p>KristinWatson</p>
              </div>
            </li>
            <li>
              <img src={picture5} alt="picturesales"/>
              <p className="label">Guy Hawkins</p>
              <div className="price">
                <img src={vectorSmall} alt="vectorSmall"/>
                <span>$739.65</span>
              </div>
              <div className="salesman">
                <img src={avatarMarvinMcKinney} alt="avatarMarvinMcKinney"/>
                <p>MarvinMcKinney</p>
              </div>
            </li>
            <li>
              <img src={picture6} alt="picturesales"/>
              <p className="label">Savannah Nguyen</p>
              <div className="price">
                <img src={vectorSmall} alt="vectorSmall"/>
                <span>$105.55</span>
              </div>
              <div className="salesman"> 
                <img src={avatarSavannahNguyen} alt="avatarSavannahNguyen"/>
                <p>SavannahNguyen</p>
              </div>
            </li>
            <li>
              <img src={picture7} alt="picturesales"/>
              <p className="label">Wade Warren</p>
              <div className="price">
                <img src={vectorSmall} alt="vectorSmall"/>
                <span>$396.84</span>
              </div>
              <div className="salesman">
                <img src={avatarCodyFisher} alt="avatarCodyFisher"/>
                <p>CodyFisher</p>
              </div>
            </li>
            <li>
              <img src={picture8} alt="picturesales"/>
              <p className="label">Devon Lane</p>
              <div className="price">
                <img src={vectorSmall} alt="vectorSmall"/>
                <span>$928.41</span>
              </div>
              <div className="salesman">
                <img src={avatarDarrellSteward} alt="avatarDarrellSteward"/>
                <p>DarrellSteward</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="scrinThird">
        <div id="titleScrinThird">
          <p>Browse by category</p>
        </div>
        <div id="descriptionScrinThird">
          <p>This NFT website is a website that features buying and selling, news and blogs. Designed with a minimalist and informative concept</p>
        </div>
        <div className="cripto">
          <ul>
            <li>
              <img src={blockchainLogo} alt="blockchainLogo"/>
            </li>
            <li>
              <img src={BTCLogo} alt="BTCLogo"/>
            </li>
            <li>
              <img src={ethereumLogo} alt="ethereumLogo"/>
            </li>
            <li>
              <img src={shibaLogo} alt="shibaLogo"/>
            </li>
            <li>
              <img src={TetherLogo} alt="TetherLogo"/>
            </li>
          </ul>
        </div>
        <div className="scrinFourth">
          <div id="titleScrinFourth">
            <p>Stay in the loop</p>
          </div>
          <div id="descriptionScrinFourth">
            <p>Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating NFT.Ring</p>
          </div>
          <div>
            <form>
              <input id="Email" type="text" placeholder="Your Email Address"/>
              <button className="BtnLogin">Register</button>
            </form>
          </div>
        </div>
      </div>
      <footer>
        <div>
          <div className="wrapperLogo">
            <div className="LogoFutter"></div>
            <h3 id="labelFooter">NFT.Ring</h3>
          </div>
          <div className="descriptionFutter">
            <span>The world’s first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital assets.</span>
          </div>
        </div>
        <div className="Marketplace">
          <ul>
            <li>
              <p className="titleBold">Marketplace</p>
            </li>
            <li>
              <p>All NFTs</p>
            </li>
            <li>
              <p>New</p>
            </li>
            <li>
            <p>Art</p>
            </li>
            <li>
              <p>Music</p>
            </li>
            <li>
              <p>Domain Names</p>
            </li>
            <li>
              <p>Virtual Worlds</p>
            </li>
            <li>
              <p>Trading Cards</p>
            </li>
            <li>
              <p>Collectibles</p>
            </li>
            <li>
              <p>Sports</p>
            </li>
            <li>
              <p>Utility</p>
            </li>
          </ul>
        </div>
        <div className="MyAccount">
          <ul>
            <li>
              <p className="titleBold">My Account</p>
            </li>
            <li>
              <p>My Profile</p>
            </li>
            <li>
              <p>My Collections</p>
            </li>
            <li>
              <p>My Favorites</p>
            </li>
            <li>
              <p>My Account Settings</p>
            </li>
            <li>
              <p>About</p>
            </li>
            <li>
              <p>Careers</p>
            </li>
          </ul>
        </div>
        <div className="Resouces">
          <ul>
            <li>
              <p className="titleBold">Resources</p>
            </li>
            <li>
              <p>Help Center</p>
            </li>
            <li>
              <p>Partners</p>
            </li>
            <li>
              <p>Suggestions</p>
            </li>
            <li>
              <p>Discord Community</p>
            </li>
            <li>
              <p>Blog</p>
            </li>
            <li>
              <p>Docs</p>
            </li>
            <li>
              <p>Newsletter</p>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
export default App;