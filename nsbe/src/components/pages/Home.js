import React from 'react';
import { nationals } from '../../assets';
import { nationals2 } from '../../assets';
import { newsBoard } from '../../assets';
import { SectionWrapper } from '../../hoc';
import { ImageSlider } from '../ImageSlider';
import { Typewriter } from 'react-simple-typewriter';
import "./Home.css";


const IMAGES = [nationals2,nationals,newsBoard];

function Home() {
  return (
    <>
    <div className='section-container'>
      <h1 className='header-text'>
        We are {' '}
        <span className='inner-text'>
          <Typewriter
            words={['Strong', 'United','Proud', 'LaTech NSBE!']}
            loop={true}
            cursor
            cursorStyle='|'
            typeSpeed={250}
            deleteSpeed={150}
            delaySpeed={1200}
          />
        </span>
      </h1>
      <div style={{maxWidth:"1200px", width:"100%", aspectRatio:"7/3", margin:"0 auto", position:"absolute"}}>
        <ImageSlider imageUrls={IMAGES} />
    </div>
    </div>
  
    </>
  )
}

export default SectionWrapper(Home,"home");
