import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import About from './components/pages/About';
import Calendar from './components/pages/Calendar';
import Programs from './components/pages/Programs';
import Footer from './components/pages/Footer';
import Home from './components/pages/Home';
import Member from './components/pages/Member';
import './snowflake.css';

const App = () => {
  const [snowflakes, setSnowflakes] = useState([]);
  function debounce(func, wait) {
    let timeout;
    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        func.apply(this, args);
      }, wait);
    };
  }
  

  const handleResize = () => {
    const count = 200;
    console.log("width :" + window.innerWidth)
    console.log("height: " + window.document.documentElement.offsetHeight)
    console.log("count:" + count)

    const newSnowflakes = [];
    const isMobile = window.innerWidth <= 100;
    var height =  window.document.documentElement.offsetHeight 

    for (let i = 0; i < count; i++) {
      const leftSnow = isMobile
      ? Math.floor(Math.random() * (window.innerWidth - 300))
      : Math.floor(Math.random() * (window.innerWidth-150));
      const topSnow = isMobile 
      ? Math.floor(Math.random() * (window.document.documentElement.offsetHeight-600))  // For mobile, appHeight multiplied by a factor
      : Math.floor(Math.random() * (window.document.documentElement.offsetHeight-550)); 
      const widthSnow = Math.floor(Math.random() * 50);
      const timeSnow = Math.floor(Math.random() * 5) + 5;
      const blurSnow = Math.floor(Math.random() * 5);

      newSnowflakes.push(
        <div
          key={i}
          className="snow"
          style={{
            left: `${leftSnow}px`,
            top: `${topSnow}px`,
            width: `${widthSnow}px`,
            height: `${widthSnow}px`,
            animationDuration: `${timeSnow}s`,
            filter: `blur(${blurSnow}px)`,
          }}
        />
      );
    }
    setSnowflakes(newSnowflakes);
  };

  useEffect(() => {
    const debouncedHandleResize = debounce(handleResize, 250); // 250ms delay
    debouncedHandleResize();

    window.addEventListener('resize', debouncedHandleResize);

    return () => {
      window.removeEventListener('resize', debouncedHandleResize);
    };
  }, []);

  return (
    <BrowserRouter>
      <div id="container">
        <div className="snow"></div>
        {snowflakes}
      </div>
      <Navbar />
      <div>
        <Home />
        <About />
        <Calendar />
        <Programs />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
