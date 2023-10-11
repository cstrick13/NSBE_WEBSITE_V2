import React from 'react';
import { fire,bulldog } from '../../assets';
import { SectionWrapper } from '../../hoc';
import "./AboutCard.css";

function AboutCards() {
  return (
    <>
    <div className='body'>
        <h1>About Us</h1>
    <div class="container">
        <div className='card'>
            <div className='imgBx' data-text="Fire" >
                <img src={fire} className='img-size'/>
            </div>
            <div className='content'>
                <div>
                    <h3>Region 5</h3>
                    <p>lorem ipsum jsdnkjndiowenddddddddddddddddddddddddddddddddddd</p>
                </div>
            </div>
        </div>
        <div className='card'>
            <div className='imgBx' data-text="Bulldog" >
                <img src={bulldog} className='img-size'/>
            </div>
            <div className='content'>
                <div>
                    <h3>Chapter</h3>
                    <p>lorem ipsum jsdnkjndiowenddddddddddddddddddddddddddddddddddd</p>
                </div>
            </div>
        </div>
      
    </div>
    </div>
    </>
  )
}

export default SectionWrapper(AboutCards,"about");
