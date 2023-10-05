import React from 'react';
import { nationals } from '../../assets';
import { nationals2 } from '../../assets';
import { newsBoard } from '../../assets';
import { SectionWrapper } from '../../hoc';
import { ImageSlider } from '../ImageSlider';
import { Typewriter } from 'react-simple-typewriter';
import "./Home.css";


const IMAGES = [nationals,nationals2];

function Home() {
  return (
    <>
    <div className='section-container'>
      <h1 className='header-text'>
        We are {' '}
        <span className='inner-text'>
          <Typewriter
            words={['a Family', 'a Community', 'LaTech NSBE!']}
            loop={true}
            cursor
            cursorStyle='|'
            typeSpeed={110}
            deleteSpeed={80}
            delaySpeed={1500}
          />
        </span>
      </h1>
    </div>
    <div style={{maxWidth:"1200px", width:"100%",aspectRatio:"10/6", margin:"0 auto"}}>
    <ImageSlider imageUrls={IMAGES} />
    </div>
    </>
  )
}

export default SectionWrapper(Home,"home");
