import React from 'react';
import { CEB, firstDay, grambling, nationals, tech} from '../../assets';
import { nationals2,nationals3,nationals4 } from '../../assets';
import { newsBoard } from '../../assets';
import { SectionWrapper } from '../../hoc';
import { ImageSlider } from '../ImageSlider';
import { Typewriter } from 'react-simple-typewriter';
import "./Home.css";


const IMAGES = [CEB,tech,firstDay,grambling];

function Home() {
  return (
    <div className="hero-container">
      <img src={nationals4} alt="Hero Background" className="hero-background-image" />
      <div className="hero-overlay">
        <h1>Louisiana Tech NSBE</h1>
        <h2>
          <Typewriter
            words={['Innovate', 'Inspire', 'Empower']}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h2>
      </div>
    </div>
  )
}

export default SectionWrapper(Home,"home");
