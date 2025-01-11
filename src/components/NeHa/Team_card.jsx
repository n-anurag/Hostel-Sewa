// TeamSection.js
import React, { useState } from 'react';
import './Team_card.css';

const TeamSection = () => {
  const [activeTab, setActiveTab] = useState('Central');

  const tabs = ['Central', 'Kathmandu', 'Morang'];

  return (
    <div className="team-section-title">
      <h2 className="team-titles">Meet Our Team</h2>
      <p className="team-description">
        Lorem ipsum dolor sit amet consectetur. Mi mauris volutpat et dignissim nibh sit nisl in. Duis ut arcu id risus pharetra eget. Sit consequat eu dui.
      </p>
      
      <div className="team-tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`team-tab ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      
      
    </div>
  );
};

export default TeamSection;
