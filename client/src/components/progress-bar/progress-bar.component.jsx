import React from 'react';

import './progress-bar.styles.scss';

const ProgressBar = () => (
  <div className="bar-container">
    <p>0:00 &nbsp;</p>
    <div className="progress-bar" />
    <p>&nbsp; 4:16</p>
  </div>
);

export default ProgressBar;
