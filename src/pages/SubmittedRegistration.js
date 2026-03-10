

// Submitted Registration Page - For returning users who already registered
import React from 'react';
import { useNavigate } from 'react-router-dom';

function SubmittedRegistration({ formData, clearRegistration }) {
  // Hook to navigate between pages
  const navigate = useNavigate();

  // Function to handle registration cancellation
  const handleCancel = () => {
    // Ask user to confirm before cancelling
    const confirmed = window.confirm(
      'Are you sure you want to cancel your registration? This action cannot be undone.'
    );
    
    if (confirmed) {
      // Clear registration from localStorage
      clearRegistration();
      // Navigate back to home page
      navigate('/');
    }
  };

  return (
    <div className="container">
      <h1>Your Registration Details</h1>
      
      {/* Info message for returning users */}
      <div className="success-message">
        <p>✅ You have already registered for the Tech Innovation Conference 2024</p>
      </div>

      {/* Display all registration details */}
      <div className="review-section">
        <h2>Registration Information</h2>
        
        {/* Full Name */}
        <div className="review-item">
          <strong>Full Name:</strong> {formData.fullName}
        </div>

        {/* Email */}
        <div className="review-item">
          <strong>Email:</strong> {formData.email}
        </div>

        {/* Phone */}
        <div className="review-item">
          <strong>Phone:</strong> {formData.phone}
        </div>

        {/* Organization - only show if provided */}
        {formData.organization && (
          <div className="review-item">
            <strong>Organization:</strong> {formData.organization}
          </div>
        )}

        {/* Ticket Type */}
        <div className="review-item">
          <strong>Ticket Type:</strong> {formData.ticketType}
        </div>

        {/* Dietary Requirements - only show if provided */}
        {formData.dietaryRequirements && (
          <div className="review-item">
            <strong>Dietary Requirements:</strong> {formData.dietaryRequirements}
          </div>
        )}

        {/* Additional Notes - only show if provided */}
        {formData.additionalNotes && (
          <div className="review-item">
            <strong>Additional Notes:</strong> {formData.additionalNotes}
          </div>
        )}
      </div>

      {/* Event reminder */}
      <div className="event-details">
        <h2>Event Details</h2>
        <p><strong>📅 Date:</strong> June 15-16, 2024</p>
        <p><strong>🕐 Time:</strong> 9:00 AM - 5:00 PM</p>
        <p><strong>📍 Location:</strong> Tech Hub Convention Center, Silicon Valley</p>
        <p style={{ marginTop: '20px' }}>
          We look forward to seeing you at the conference!
        </p>
      </div>

      {/* Action buttons */}
      <div className="button-container">
        {/* Cancel registration button */}
        <button className="danger" onClick={handleCancel}>
          Cancel Registration
        </button>
      </div>
    </div>
  );
}

export default SubmittedRegistration;
