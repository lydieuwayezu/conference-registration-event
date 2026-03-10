


// Review Page - Shows summary of entered information before confirmation
import React from 'react';
import { useNavigate } from 'react-router-dom';

function ReviewPage({ formData }) {
  // Hook to navigate between pages
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>Review Your Registration</h1>
      <p>Please review your information before confirming your registration.</p>

      {/* Display all form data in a readable format */}
      <div className="review-section">
        
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

      {/* Action buttons */}
      <div className="button-container">
        {/* Go back to edit form */}
        <button className="secondary" onClick={() => navigate('/register')}>
          Edit Information
        </button>
        
        {/* Confirm and proceed */}
        <button onClick={() => navigate('/confirmation')}>
          Confirm Registration
        </button>
      </div>
    </div>
  );
}

export default ReviewPage;
