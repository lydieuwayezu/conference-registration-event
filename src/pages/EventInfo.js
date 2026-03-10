
// Event Information Page - First page users see
import React from 'react';
import { useNavigate } from 'react-router-dom';

function EventInfo() {
  // useNavigate hook allows us to navigate to different pages
  const navigate = useNavigate();

  // Function to handle register button click
  const handleRegister = () => {
    // Navigate to registration form page
    navigate('/register');
  };

  return (
    <div className="container">
      <div className="event-info">
        <h1>🚀 Tech Innovation Conference 2024</h1>
        
        {/* Event details section */}
        <div className="event-details">
          <h2>Event Details</h2>
          <p><strong>📅 Date:</strong> June 15-16, 2024</p>
          <p><strong>🕐 Time:</strong> 9:00 AM - 5:00 PM</p>
          <p><strong>📍 Location:</strong> Tech Hub Convention Center, Silicon Valley</p>
          
          <h2>About the Conference</h2>
          <p>
            Join us for the most exciting technology conference of the year! 
            Connect with industry leaders, learn about cutting-edge innovations, 
            and network with fellow tech enthusiasts.
          </p>
          
          <h2>Featured Topics</h2>
          <p>
            ✨ Artificial Intelligence & Machine Learning<br/>
            ✨ Cloud Computing & DevOps<br/>
            ✨ Web Development & Mobile Apps<br/>
            ✨ Cybersecurity & Data Privacy<br/>
            ✨ Blockchain & Cryptocurrency
          </p>
          
          <h2>Key Speakers</h2>
          <p>
            🎤 Dr. Sarah Johnson - AI Research Lead at TechCorp<br/>
            🎤 Michael Chen - CTO of CloudSystems<br/>
            🎤 Emma Williams - Cybersecurity Expert
          </p>
        </div>

        {/* Call to action button */}
        <div className="button-container">
          <button onClick={handleRegister}>
            Register Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default EventInfo;
