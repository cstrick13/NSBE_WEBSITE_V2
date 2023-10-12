import React from 'react';
import { img1,img2,img3,img4 } from '../../assets';
import "./Calendar.css";
import { SectionWrapper } from '../../hoc';


function Calendar() {
  return (
    <>
     <div className="container-1">
        <div className="item-container">
            <div className="img-container">
                <img src={img1} alt="Event image" />
            </div>
            <div className="body-container">
                <div className="overlay"></div>

                <div className="event-info">
                    <p className="title">Study Jams</p>
                    <div className="separator"></div>
                    <p className="info">Tues/Thurs</p>
                    <p className="price">Tutoring</p>

                    <div className="additional-info">
                        <p className="info">
                            <i className="fas fa-map-marker-alt"></i>
                            IESB 220
                        </p>
                        <p className="info">
                            <i className="far fa-calendar-alt"></i>
                            Every Tuesday and Thursday, 7pm
                        </p>

                        <p className="info description">
                            Study Jams someruigbyrgfuicbjnjz cjk ckl ckdsm c;kmcl;
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="item-container">
            <div className="img-container">
                <img src={img2} alt="Event image" />
            </div>
            <div className="body-container">
                <div className="overlay"></div>

                <div className="event-info">
                    <p className="title">Study Jams</p>
                    <div className="separator"></div>
                    <p className="info">Tues/Thurs</p>
                    <p className="price">Tutoring</p>

                    <div className="additional-info">
                        <p className="info">
                            <i className="fas fa-map-marker-alt"></i>
                            IESB 220
                        </p>
                        <p className="info">
                            <i className="far fa-calendar-alt"></i>
                            Every Tuesday and Thursday, 7pm
                        </p>

                        <p className="info description">
                            Study Jams someruigbyrgfuicbjnjz cjk ckl ckdsm c;kmcl;
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
