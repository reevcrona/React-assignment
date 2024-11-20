import { useState } from 'react'
import AlbumCard from './AlbumCard'
import "./App.css";
import ThrillerImg from "./assets/thriller-album.jpg";
import BackInBlackImg from "./assets/BackInBlack.svg"
import TheBodyGuardImg from "./assets/theBodyGuard.jpg";
import TheDarkSideOftheMoonImg from "./assets/TheDarkSideoftheMoon.webp";
import BatOutOfHellImg from "./assets/Bat Out of Hell.jpg";

function App() {
  
  return (
    <div className="main-container">
      <AlbumCard image = {ThrillerImg} />
      <AlbumCard image = {BackInBlackImg} />
      <AlbumCard image = {TheBodyGuardImg} />
      <AlbumCard image = {TheDarkSideOftheMoonImg} />
      <AlbumCard image = {BatOutOfHellImg} />
    </div>
  )
}

export default App
