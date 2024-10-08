import React from 'react';
import { ginger, img1,img2,img3,img4 } from '../../assets';
import "./Calendar.css";
import { SectionWrapper } from '../../hoc';


function Calendar() {
  return (
    <>
    <div className='header-text-Events'>
    <div className="calendar-container">
      <iframe 
        src="https://teamup.com/ks74r4wp9oe2jzbgni?showProfileAndInfo=0&showSidepanel=1&showViewHeader=1&showAgendaDetails=0&showDateControls=1" 
        className="calendar-iframe" 
        loading="lazy" 
        frameBorder="0" 
        title="TeamUp Calendar"
      ></iframe>
    </div>
    </div>
    
    </>
  )
}

export default SectionWrapper(Calendar,'calendar');
