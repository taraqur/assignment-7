import React from 'react';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import friendsData from '../data/friends.json';
import './FriendDetails.css';

// Assets path according to your structure
import callIcon from '../assets/assets/call.png';
import textIcon from '../assets/assets/text.png';
import videoIcon from '../assets/assets/video.png';

const FriendDetails = ({ addEntry }) => {
  const { id } = useParams();
  const friend = friendsData.find(f => f.id === parseInt(id)) || friendsData[0];

  const handleAction = (type) => {
    const newEntry = {
      id: Date.now(),
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      type: type,
      title: `${type} with ${friend.name}`
    };
    addEntry(newEntry);
    toast.success(`${type} logged!`);
  };

  return (
    <div className="details-wrapper">
      <div className="details-grid">
        {/* Left Side: Profile Card */}
        <div className="left-panel">
          <div className="info-card">
            <img src={friend.picture} className="profile-large" alt={friend.name} />
            <h2 className="friend-name">{friend.name}</h2>
            <div className="pills-row">
              <span className="pill overdue">Overdue</span>
              <span className="pill family">Family</span>
            </div>
            <p className="quote-text">"Former colleague, great mentor"</p>
            <p className="preferred-text">Preferred: email</p>
            
            <div className="side-actions">
              <button className="action-item">⏰ Snooze 2 Weeks</button>
              <button className="action-item">📦 Archive</button>
              <button className="action-item delete-text">🗑️ Delete</button>
            </div>
          </div>
        </div>

        {/* Right Side: Stats and Quick Check-in */}
        <div className="right-panel">
          <div className="stats-row">
            <div className="s-card">
              <h3 className="stat-value">62</h3>
              <p className="stat-label">Days Since Contact</p>
            </div>
            <div className="s-card">
              <h3 className="stat-value">30</h3>
              <p className="stat-label">Goal (Days)</p>
            </div>
            <div className="s-card">
              <h3 className="stat-value">Feb 27, 2026</h3>
              <p className="stat-label">Next Due</p>
            </div>
          </div>

          <div className="goal-card">
            <div className="card-header">
              <h4>Relationship Goal</h4>
              <button className="edit-link">Edit</button>
            </div>
            <p className="goal-desc">Connect every <strong>30 days</strong></p>
          </div>

          <div className="checkin-section">
            <h4 className="section-subtitle">Quick Check-In</h4>
            <div className="checkin-grid">
              <button className="checkin-btn" onClick={() => handleAction('Call')}>
                <img src={callIcon} alt="" />
                <span className="btn-label">Call</span>
              </button>
              <button className="checkin-btn" onClick={() => handleAction('Text')}>
                <img src={textIcon} alt="" />
                <span className="btn-label">Text</span>
              </button>
              <button className="checkin-btn" onClick={() => handleAction('Video')}>
                <img src={videoIcon} alt="" />
                <span className="btn-label">Video</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;