import React from 'react';
import { img1,img2,img3,img4 } from '../../assets';
import "./Calendar.css";
import { SectionWrapper } from '../../hoc';


function Calendar() {
  return (
    <>
     <div class="container">
        <div class="item-container">
            <div class="img-container">
                <img src={img1} alt="Event image" />
            </div>
            <div class="body-container">
                <div class="overlay"></div>

                <div class="event-info">
                    <p class="title">Study Jams</p>
                    <div class="separator"></div>
                    <p class="info">Tues/Thurs</p>
                    <p class="price">Tutoring</p>

                    <div class="additional-info">
                        <p class="info">
                            <i class="fas fa-map-marker-alt"></i>
                            IESB 220
                        </p>
                        <p class="info">
                            <i class="far fa-calendar-alt"></i>
                            Every Tuesday and Thursday, 7pm
                        </p>

                        <p class="info description">
                            Study Jams someruigbyrgfuicbjnjz cjk ckl ckdsm c;kmcl;
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="item-container">
            <div class="img-container">
                <img src={img2} alt="Event image" />
            </div>

            <div class="body-container">
                <div class="overlay"></div>

                <div class="event-info">
                    <p class="title">FRC</p>
                    <div class="separator"></div>
                    <p class="info">New Orleans,LA</p>
                    <p class="price">Conference</p>

                    <div class="additional-info">
                        <p class="info">
                            <i class="fas fa-map-marker-alt"></i>
                            245 W 52nd St, New York
                        </p>
                        <p class="info">
                            <i class="far fa-calendar-alt"></i>
                            At some time
                        </p>

                        <p class="info description">
                            Welcome! Everyone has a unique perspective after reading a book, and we would love you
                            to share yours with us! We meet one Sunday evening 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default SectionWrapper(Calendar,'calendar');
