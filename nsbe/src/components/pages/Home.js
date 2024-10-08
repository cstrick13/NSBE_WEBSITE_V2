import React from 'react';
import { CEB, firstDay, grambling, nationals, tech } from '../../assets';
import { nationals2,nationals3,nationals4 } from '../../assets';
import { newsBoard } from '../../assets';
import { SectionWrapper } from '../../hoc';
import { ImageSlider } from '../ImageSlider';
import { Typewriter } from 'react-simple-typewriter';
import "./Home.css";


const IMAGES = [CEB,tech,firstDay,grambling];

function Home() {
  return (
    <>
    <div className="hero-section" style={{ backgroundImage: `url(${CEB})` }}>
      <div className='overlay'>
      <h1 className="hero-text">
        We are{' '}
        <span className="typewriter-text">
          <Typewriter
            words={['Strong', 'Proud', 'United', 'LaTech NSBE!']}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={350}
            deleteSpeed={200}
            delaySpeed={1200}
          />
        </span>
      </h1>
    </div>
    </div>

    <div className="mission-section">
      <h1>Our Mission</h1>
      <hr className="under-line" />
      <p className="mission-statement">
        "is to increase the number of culturally responsible Black engineers who excel academically, succeed professionally, and positively impact the community"
      </p>
    </div>
  </>
  )
}

export default SectionWrapper(Home,"home");
