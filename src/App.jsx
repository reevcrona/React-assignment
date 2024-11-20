import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from "./Pages/Home.jsx";
import Albums from "./Pages/Albums.jsx";
import Counter from './Pages/Counter.jsx';
import Navbar from "./Components/Navbar.jsx";
import Footer from './Components/Footer.jsx';
import "./App.css";








function App() {
  
  return (
    <div>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element = {<Home />}/>
          <Route path="/albums" element = {<Albums />} />
          <Route path="/counter" element = {<Counter/>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App
