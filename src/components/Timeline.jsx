import React, { useState } from 'react';
import './Timeline.css';

// Assets import
import callIcon from '../assets/assets/call.png';
import textIcon from '../assets/assets/text.png';
import videoIcon from '../assets/assets/video.png';

const Timeline = ({ entries }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('newest');

  // 1. Search Logic: Friend name ba Interaction type (Call/Text/Video)
  const filteredEntries = entries.filter((entry) =>
    entry.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    entry.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // 2. Sort Logic: Date object-e convert kore sort kora
  const sortedEntries = [...filteredEntries].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
  });

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
        
        {/* Controls: Search and Sort Row */}
        <div className="timeline-controls">
          <div className="search-box">
            <input 
              type="text" 
              placeholder="Search friend or interaction..." 
              className="timeline-search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <select 
            className="timeline-sort"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
          </select>
        </div>

        {/* Timeline Cards List */}
        <div className="timeline-list">
          {sortedEntries.length > 0 ? (
            sortedEntries.map((entry) => (
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
            <div className="empty-state">
              <p>No matching activities found.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Timeline;