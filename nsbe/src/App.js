import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import About from './components/pages/About';
import Calendar from './components/pages/Calendar';
import Home from './components/pages/Home';


const App = () => {

  return (
    <BrowserRouter>
    <Switch>
    <div className='Container'>
      <Navbar />
      <div>
        <Home />
        <Calendar />
      </div>
      </div>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
