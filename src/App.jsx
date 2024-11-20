import { useState } from 'react'
import Home from "./Pages/Home.jsx";
import Albums from "./Pages/Albums.jsx";
import Navbar from "./Navbar.jsx";
import "./App.css";



import { BrowserRouter,Routes,Route } from 'react-router-dom';




function App() {
  
  return (
    <div>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element = {<Home />}/>
          <Route path="/albums" element = {<Albums />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
