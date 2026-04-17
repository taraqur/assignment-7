import React from 'react';
import { Link } from 'react-router-dom'; 
import friendsData from '../data/friends.json';
import { Plus } from 'lucide-react';
import './FriendSection.css';

const FriendSection = () => {
  return (
    <section className="dashboard-wrapper">
      <div className="main-container">
        
        <header className="hero-header">
          <h1>Friends to keep close in your life</h1>
          <p>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
          <button className="add-friend-btn">
            <Plus size={18} /> Add a Friend
          </button>
        </header>

        {/* Stats Grid */}
        <div className="stats-grid">
          <div className="stat-card"><h2>10</h2><p>Total Friends</p></div>
          <div className="stat-card"><h2>3</h2><p>On Track</p></div>
          <div className="stat-card"><h2>6</h2><p>Need Attention</p></div>
          <div className="stat-card"><h2>12</h2><p>Interactions This Month</p></div>
        </div>

        <h3 className="section-title">Your Friends</h3>
        
        <div className="friends-grid">
          {friendsData.map((friend) => (
           
            <Link 
              to={`/friend/${friend.id}`} 
              key={friend.id} 
              className="friend-card-link"
            >
              <div className="friend-card">
                <div className="image-container">
                  <img src={friend.picture} alt={friend.name} className="profile-img" />
                </div>
                <h4>{friend.name}</h4>
                <p className="days-ago">{friend.days_since_contact}d ago</p>
                
                <div className="tags">
                  {friend.tags.map((tag, index) => (
                    <span key={index} className="tag-badge">{tag}</span>
                  ))}
                </div>

                <div className="status-container">
                  <span className={`status-pill ${friend.status.replace(/\s+/g, '-').toLowerCase()}`}>
                    {friend.status}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FriendSection;