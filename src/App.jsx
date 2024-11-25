import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from "./Pages/Home.jsx";
import Albums from "./Pages/Albums.jsx";
import Counter from './Pages/Counter.jsx';
import ColorPicker from './Pages/ColorPicker.jsx';
import Navbar from "./Components/Navbar.jsx";
import Footer from './Components/Footer.jsx';
import "./App.css";

import ThrillerImg from "./assets/thriller-album.jpg";
import BackInBlackImg from "./assets/BackInBlack.svg"
import TheBodyGuardImg from "./assets/theBodyGuard.jpg";
import TheDarkSideOftheMoonImg from "./assets/TheDarkSideoftheMoon.webp";
import BatOutOfHellImg from "./assets/Bat Out of Hell.jpg";

import { useEffect } from 'react';

const preloadImages = (images) => {
  images.forEach((image) => {
    const img = new Image();

    img.src = image;
  })
}

const myImages = [
  ThrillerImg,
  BackInBlackImg,
  TheBodyGuardImg,
  TheDarkSideOftheMoonImg,
  BatOutOfHellImg
]


function App() {
  
  useEffect(() => {
    preloadImages(myImages)
  },[])

  return (
    <div className="main-container">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element = {<Home />}/>
          <Route path="/albums" element = {<Albums />} />
          <Route path="/counter" element = {<Counter/>} />
          <Route path ="/color-picker" element = {<ColorPicker />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App
