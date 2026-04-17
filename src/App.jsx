import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import FriendSection from './components/FriendSection';
import FriendDetails from './components/FriendDetails';
import Timeline from './components/Timeline';
import Footer from './components/Footer';

function App() {
  const [timelineData, setTimelineData] = useState([]);

  const addTimelineEntry = (entry) => {
    setTimelineData([entry, ...timelineData]);
  };

  return (
    <Router>
      <Toaster position="top-right" />
      <Navbar />
      <main style={{ minHeight: '80vh' }}>
        <Routes>
          <Route path="/" element={<FriendSection />} />
          <Route path="/friend/:id" element={<FriendDetails addEntry={addTimelineEntry} />} />
          <Route path="/timeline" element={<Timeline entries={timelineData} />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;