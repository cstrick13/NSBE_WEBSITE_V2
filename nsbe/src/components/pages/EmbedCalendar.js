import React from 'react';
import './EmbedCalendar.css';
import { SectionWrapper } from '../../hoc';

function EmbedCalendar() {
  return (
    <div className="embed-calendar-section">
      <h2 className="embed-calendar-title">Our Calendar</h2>
      <iframe
        className="embed-calendar-iframe"
        src="https://teamup.com/ks74r4wp9oe2jzbgni"
        frameBorder="0"
        title="Teamup Calendar"
      ></iframe>
    </div>
  );
}

export default SectionWrapper(EmbedCalendar, 'embedcalendar');
