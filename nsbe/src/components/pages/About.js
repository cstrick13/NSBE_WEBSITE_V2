import React from 'react'
import "./About.css";
import { SectionWrapper } from '../../hoc';


function About() {
  return (
    <>
    <div class="section">
      <div className='container'>
        <div className='banner'>
          <div className='banner-text'>
            <h2>ABOUT US</h2>
          </div>
        </div>
        <div className='content-section'>
          <div className='title'>
            <h1>Lousiana Tech Chapter</h1>
          </div>
          <div className='title'>
            <h1>Region 5</h1>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default SectionWrapper(About,"about")
