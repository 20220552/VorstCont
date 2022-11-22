//import logo from './logo.svg';


import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Button from 'react-bootstrap/Button';

import Nav from './Pages/Nav';
import Home from './Pages/Home'
import About from './Pages/About';
import Contact from './Pages/Contact';
import Portfolio from './Pages/Portfolio';
import PortfolioList from './Pages/Portfolio/PortfolioList';
import PortfolioItem from './Pages/Portfolio/PortfolioItem'


function App() {
  return (
    <div className="App">
        
        
        
        <BrowserRouter>

        <Routes>
        <Route path="/" element={<Nav />}> {/*top route will load and be used to define links*/}
        <Route path="/Home" element={<Home />} />
        <Route path="About" element={<About />} /> 
        <Route path="Portfolio/PortfolioList" element={<PortfolioList />} />
        <Route path="Contact" element={<Contact />} > 
        <Route path="PortfolioItem/selectedItem/:id" element={<PortfolioItem />} />
              
        </Route>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  </BrowserRouter>
  
      
      
    </div>
  );
}

export default App;
