import React from 'react';
import "./About.css";
import { SectionWrapper } from '../../hoc';
import { fire, bulldog } from '../../assets';

function About() {
  return (
    <>
      <div className='body'>
        <div className="container">
          <div className='card'>
            <div className='imgBx' data-text="Region 5">
              <img src={fire} className='img-size' alt="Region 5" />
            </div>
            <div className='content'>
              <div>
                <h3>Region 5</h3>
                <p>
                  The National Society of Black Engineers (NSBE) is a 501(C)(3) non-profit association that is owned and managed by its members. The organization is dedicated to the academic and professional success of African-American engineering students and professionals. NSBE offers leadership training, professional development, mentoring opportunities, career placement services and more.
                </p>
              </div>
            </div>
          </div>
          <div className='card'>
            <div className='imgBx' data-text="Chapter">
              <img src={bulldog} className='img-size' alt="Louisiana Tech Chapter" />
            </div>
            <div className='content'>
              <div>
                <h3>Louisiana Tech Chapter</h3>
                <p>
                  The Louisiana Tech chapter is one of the many chapters of Region V, the Vanguard region, and is fully run by students. Our objective is to build a foundation to unify African Americans, black engineers, and other minorities. NSBE focuses on helping students excel academically and professionally, while also impacting our community and campus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionWrapper(About, "about");
