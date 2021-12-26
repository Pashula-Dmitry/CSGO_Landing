import './App.css';
import csgo from  './assets/images/csgo.jpg';
import device from './assets/images/device.jpg';
import simple from './assets/images/simple.png';
import navi from './assets/images/navi.webp';
import players from './assets/images/players.jpg';
import Hero from "./components/Hero";
import Slider from "./components/Slider";
import Navbar from "./components/Navbar";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero imageSrc={navi}/>
      <Slider imageSrc={players}
              title={'High salary!'}
              subtitle={'Cybersportsmen make more then $5000 a month'}
      />
        <Slider imageSrc={simple}
              title={'Change your life right now!'}
              subtitle={'Stop working as a security guard at ATB'}
              flipped={true}
      />
        <Slider imageSrc={device}
                title={'Start with us'}
                subtitle={'Don\'t miss the opportunity'}
        />
        <Slider imageSrc={csgo}
                title={'The end of journey by my website'}
                subtitle={'Further - paid =)'}
                flipped={true}
        />
    </div>
  );
}

export default App;
