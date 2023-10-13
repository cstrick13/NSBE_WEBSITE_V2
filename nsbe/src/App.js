import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import About from './components/pages/About';
import Calendar from './components/pages/Calendar';
import Programs from './components/pages/Programs';
import Footer from './components/pages/Footer';
import Home from './components/pages/Home';
import Member from './components/pages/Member';

const App = () => {
  return (
    <BrowserRouter >

     <Navbar  />
     <div>
     <Home />
      <About />
      <Calendar />
      <Programs />
      </div>
      <Footer />
     </BrowserRouter>
    
    
  );
}

export default App;
