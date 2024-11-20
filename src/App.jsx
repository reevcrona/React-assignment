import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from "./Pages/Home.jsx";
import Albums from "./Pages/Albums.jsx";
import Counter from './Pages/Counter.jsx';
import Navbar from "./Navbar.jsx";
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
    </div>
  )
}

export default App
