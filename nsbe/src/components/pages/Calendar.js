import React from 'react';
import './Calendar.css';
import { SectionWrapper } from '../../hoc';
import { img2, img4 } from '../../assets';

function Calendar() {
  const events = [
    {
      id: 1,
      title: 'Study Jams',
      date: 'Tues/Thurs',
      type: 'Tutoring',
      location: 'IESB 220',
      time: 'Every Tuesday and Thursday, 7pm',
      image: img4,
    },
    {
      id: 2,
      title: 'FRC',
      date: 'November 16-18',
      type: 'Conference',
      location: 'New Orleans, LA',
      time: 'November 16-18',
      image: img2,
    },
    // Add more events here...
  ];

  return (
    <>
      <div className="events-section">
        <h1>Events</h1>
        <div className="events-grid">
          {events.map((event) => (
            <div className="event-card" key={event.id}>
              <img src={event.image} alt={event.title} />
              <div className="event-content">
                <h2>{event.title}</h2>
                <p className="event-date">{event.date}</p>
                <p className="event-type">{event.type}</p>
                <p className="event-location">
                  <i className="fas fa-map-marker-alt"></i> {event.location}
                </p>
                <p className="event-time">
                  <i className="far fa-calendar-alt"></i> {event.time}
                </p>
                <button className="event-button">Learn More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SectionWrapper(Calendar, 'calendar');
