import React from 'react';
import './Section.scss';

const Section = ({ children }) => (
  <div className="Section">
    <div>{children}</div>
  </div>
);

export default Section;
