import React from 'react';
import './Calendar.css';
import { SectionWrapper } from '../../hoc';
import { burrito, img111, img2, img4, pi_day } from '../../assets';

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
      title: 'Pie Day w/ NSBE',
      date: 'March 14',
      type: 'Events',
      location: 'IESB',
      time: '',
      image: pi_day,
    },
    {
      id: 4,
      title: 'NSBE GBM',
      date: 'Mar 18',
      type: 'Meetings',
      location: 'IESB',
      time: '',
      image: img111,
    },
    {
      id: 5,
      title: 'NSBE Burritos (NOT FREE)',
      date: 'Wed Mar 19 2025',
      type: 'Fundrasier',
      location: ' @Student Center (subject to change)',
      time: '@11AM to 2PM',
      image: burrito,
    },
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
