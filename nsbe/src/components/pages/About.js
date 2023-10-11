import React from 'react'
import "./About.css";
import { SectionWrapper } from '../../hoc';
import { nationals } from '../../assets';


function About() {
  return (
    <>
    <div className="section">
      
      <div className='container'>
        <div className='content-section'>
          <div className='title'>
            <h1>About Us</h1>
          </div>
          <div className='title'>
            <h3>Lousiana Tech Chapter</h3>
          </div>
          <div className='content'>
          <p>The Louisiana Tech chapter is one of the many chapters of Region V, the Vanguard region, and is fully run by students. Our objective is to build a foundation to unify African Americans, black engineers and other minorities. NSBE is focused on helping students excel academically through the intense-fast paced science, technologies, engineering and mathematics curriculum. We also assist students in getting internships, co-ops, and full-time jobs. In addition, we work to impact the College of Engineering and Science at Louisiana Tech University and the Ruston community at large.</p>
          </div>
          <div className='title'>
            <h3>Region 5</h3>
          </div>
          <div className='content'>
          <p>The National Society of Black Engineers (NSBE) is a 501(C)(3) non-profit association that is owned and managed by its members. The organization is dedicated to the academic and professional success of African-American engineering students and professionals. NSBE offers its members leadership training, professional development, mentoring opportunities, career placement services and more. NSBE is comprised of 242 collegiate, 70 professional and 82 pre-college active chapters nationwide and overseas. These chapters are geographically divided into six regions. NSBE is governed by an executive board of college students and engineering professionals and is operated by a professional staff in our World Headquarters located in Alexandria, VA.</p>
          </div>
        </div>
      </div>
      <div className='image-section'>
      </div>
    </div>
    </>
  )
}

export default About;
