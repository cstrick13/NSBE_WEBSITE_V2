import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import About from './components/pages/About';
import Programs from './components/pages/Programs';

function App() {
  return (
    <>
    <BrowserRouter>
    <div>
     <Navbar />
     </div>
      <About />
      <Programs />
     </BrowserRouter>
     </>
    
  );
}

export default App;
