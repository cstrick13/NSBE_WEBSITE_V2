import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import About from './components/pages/About';
import Programs from './components/pages/Programs';
import Footer from './components/pages/Footer';
import Home from './components/pages/Home';

const App = () => {
  return (
    <BrowserRouter>
    <div className='Background'>
     <Navbar />
     <div>
     <Home />
      <About />
      <Programs />
      </div>
      <Footer />
      </div>
     </BrowserRouter>
    
    
  );
}

export default App;
