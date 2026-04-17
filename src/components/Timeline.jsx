import React from 'react';
import './Timeline.css';
import callIcon from '../assets/assets/call.png';
import textIcon from '../assets/assets/text.png';
import videoIcon from '../assets/assets/video.png';

const Timeline = ({ entries }) => {
  const getIcon = (type) => {
    if (type === 'Call') return callIcon;
    if (type === 'Text') return textIcon;
    return videoIcon;
  };

  return (
    <div className="timeline-wrapper">
      <div className="timeline-container">
        <h1 className="timeline-title">Timeline</h1>
        <div className="filter-box">
           <select><option>Filter timeline</option></select>
        </div>
        
        <div className="timeline-list">
          {entries.length === 0 ? (
            <div className="no-data">No history recorded yet.</div>
          ) : (
            entries.map(entry => (
              <div key={entry.id} className="timeline-card">
                <div className="t-icon-bg"><img src={getIcon(entry.type)} alt="" /></div>
                <div className="t-info">
                  <h4>{entry.title}</h4>
                  <p>{entry.date}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Timeline;