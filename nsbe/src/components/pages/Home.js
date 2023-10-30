import React from 'react';
import { nationals } from '../../assets';
import { nationals2,nationals3,nationals4 } from '../../assets';
import { newsBoard } from '../../assets';
import { SectionWrapper } from '../../hoc';
import { ImageSlider } from '../ImageSlider';
import { Typewriter } from 'react-simple-typewriter';
import "./Home.css";


const IMAGES = [nationals2,nationals,newsBoard,nationals4];

function Home() {
  return (
    <>
    <div className='section-container'>
      <h1 className='header-text'>
        We are {' '}
        <span className='inner-text'>
          <Typewriter
            words={[ 'Strong','Proud','United','LaTech NSBE!']}
            loop={true}
            cursor
            cursorStyle='|'
            typeSpeed={350}
            deleteSpeed={200}
            delaySpeed={1200}
          />
        </span>
      </h1>
      <div className="image-slider" >
        <ImageSlider imageUrls={IMAGES}  />
        <div className="mission-section">
        <h1>Our Mission</h1>
        <hr className='under-line'/>
        <p className="mission-statement"> "is to increase the number of culturally responsible Black engineers who excel academically, succeed professionally and positively impact the community"</p>
    </div>
    </div>
    </div>
  
    </>
  )
}

export default SectionWrapper(Home,"home");
