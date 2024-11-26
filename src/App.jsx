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

import {useState, useEffect } from 'react';

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

  const [color,setColor] = useState("#000000");

  const changeColor = (e) => {
    setColor(e.target.value)
  }


  return (
    <div className="main-container">
      <BrowserRouter>
      <Navbar color = {color} />
        <Routes>
          <Route path="/" element = {<Home />}/>
          <Route path="/albums" element = {<Albums />} />
          <Route path="/counter" element = {<Counter/>} />
          <Route path ="/color-picker" element = {<ColorPicker handleChange = {changeColor} color = {color} />} />
        </Routes>
      </BrowserRouter>
      <Footer color = {color} />
    </div>
  )
}

export default App
