import twitter from './twitter.svg';
import discord from './discord.svg';
import opensea from './opensea.svg';
import sample from './sample1.jpg';

function App() {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="showcase">
          <img src={sample} alt="" />
        </div>
        <div className="mint-box">
          <div className="links">
            <a href="">
              <img src={discord} alt="" />
            </a>
            <a href="">
              <img src={opensea} alt="" />
            </a>
            <a href="">
              <img src={twitter} alt="" />
            </a>
          </div>
          <div className="desc">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ad nisi molestiae, soluta culpa, veritatis sint ratione quia consectetur fugit, corporis veniam enim laborum consequuntur sunt odio eius? Dolores amet alias architecto sequi. Et, minima voluptate?
            </p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem asperiores dolorum totam.</p>
          </div>
          <button>Connect Wallet</button>
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
