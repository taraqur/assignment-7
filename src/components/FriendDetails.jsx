import React from 'react';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import friendsData from '../data/friends.json';
import './FriendDetails.css';

// Assets import matching your screenshot folder
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
    addEntry(newEntry); // Timeline state-e data pathano
    toast.success(`${type} logged successfully!`);
  };

  return (
    <div className="details-wrapper">
      <div className="details-grid">
        {/* Left Column */}
        <div className="left-panel">
          <div className="info-card">
            <img src={friend.picture} alt={friend.name} className="profile-large" />
            <h2>{friend.name}</h2>
            <div className="pills">
               <span className="pill overdue">{friend.status}</span>
               <span className="pill family">FAMILY</span>
            </div>
            <p className="bio">"Former colleague, great mentor"</p>
            <p className="preferred">Preferred: email</p>
            <div className="action-btns-vertical">
              <button>⏰ Snooze 2 Weeks</button>
              <button>📦 Archive</button>
              <button className="delete-text">🗑️ Delete</button>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="right-panel">
          <div className="stats-row">
            <div className="s-card"><h3>62</h3><p>Days Since Contact</p></div>
            <div className="s-card"><h3>30</h3><p>Goal (Days)</p></div>
            <div className="s-card"><h3>Feb 27</h3><p>Next Due</p></div>
          </div>

          <div className="goal-card">
            <div className="card-header">
              <h4>Relationship Goal</h4>
              <button className="edit-mini">Edit</button>
            </div>
            <p>Connect every <strong>30 days</strong></p>
          </div>

          <div className="checkin-section">
            <h4>Quick Check-In</h4>
            <div className="checkin-grid">
              <button onClick={() => handleAction('Call')}>
                <img src={callIcon} alt="" /> <span>Call</span>
              </button>
              <button onClick={() => handleAction('Text')}>
                <img src={textIcon} alt="" /> <span>Text</span>
              </button>
              <button onClick={() => handleAction('Video')}>
                <img src={videoIcon} alt="" /> <span>Video</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;