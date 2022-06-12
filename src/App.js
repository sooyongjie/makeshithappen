import twitter from './img/twitter.png';
import opensea from './img/opensea.png';
import etherscan from './img/etherscan.png';
import connectWallet from './img/connect_wallet.png';
import logo from './img/logo.png';
import video from './img/video.webm';

import sample from './sample1.jpg';

function App() {
  return (
    <div className="container">
      <div className="logo-wrapper">
        <img src={logo} alt="" className='logo' />
      </div>
      <div className="wrapper">
        <div className="showcase">
          {/* <img src={sample} alt="" /> */}
          <video src={video} autoPlay loop muted></video>
        </div>
        <div className="mint-box">
          <div className="links">
            <a href="">
              <img src={twitter} alt="" />
            </a>
            <a href="">
              <img src={opensea} alt="" />
            </a>
            <a href="">
              <img src={etherscan} alt="" />
            </a>
          </div>
          <div className="desc">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ad nisi molestiae, soluta culpa, veritatis sint ratione quia consectetur fugit, corporis veniam enim laborum consequuntur sunt odio eius? Dolores amet alias architecto sequi. Et, minima voluptate?
            </p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem asperiores dolorum totam.</p>
          </div>
          <button>
            <img src={connectWallet} alt="" />
          </button>
        </div>
      </div>
      <div className="banner">
        <p>No Roadmap</p>
        <p>•</p>
        <p>No Promise</p>
        <p>•</p>
        <p>Shit Just Got Real</p>
      </div>
    </div>
  );
}

export default App;
