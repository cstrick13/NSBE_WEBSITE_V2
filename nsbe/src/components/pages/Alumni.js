import React from 'react';
import './Alumni.css';
import { SectionWrapper } from '../../hoc';

function Alumni() {
  return (
    <div className="alumni-container">
      <h1>Coming Soon</h1>
      <p>We're working on something awesome. Stay tuned!</p>
      <div className="loader"></div>
    </div>
  );
}

export default SectionWrapper(Alumni, 'alumni');
