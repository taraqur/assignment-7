import React from 'react';
import './Timeline.css';

// Assets import (Figma onujayi icons)
import callIcon from '../assets/assets/call.png';
import textIcon from '../assets/assets/text.png';
import videoIcon from '../assets/assets/video.png';

const Timeline = ({ entries }) => {
  // Activity type onujayi icon select korar function
  const getIcon = (type) => {
    switch (type) {
      case 'Call': return callIcon;
      case 'Text': return textIcon;
      case 'Video': return videoIcon;
      default: return callIcon;
    }
  };

  return (
    <div className="timeline-wrapper">
      <div className="timeline-container">
        <h1 className="timeline-title">Timeline</h1>
        
        {/* Filter Label (Design onujayi) */}
        <div className="filter-box">
          <p className="filter-label">Filter timeline ▾</p>
        </div>

        {/* Timeline Entries */}
        <div className="timeline-list">
          {entries && entries.length > 0 ? (
            entries.map((entry) => (
              <div key={entry.id} className="timeline-card">
                <div className="timeline-icon-bg">
                  <img src={getIcon(entry.type)} alt={entry.type} className="t-icon" />
                </div>
                <div className="timeline-content">
                  <h4 className="entry-title">{entry.title}</h4>
                  <p className="entry-date">{entry.date}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="empty-timeline">No activities recorded yet.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Timeline;