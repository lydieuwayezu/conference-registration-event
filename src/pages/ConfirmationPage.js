

// Confirmation Page - Final step that saves registration to localStorage
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ConfirmationPage({ formData, saveRegistration }) {
  // Hook to navigate between pages
  const navigate = useNavigate();

  // useEffect runs when component loads
  // Automatically save registration when this page is shown
  useEffect(() => {
    // Call the saveRegistration function from App.js
    // This saves data to localStorage
    saveRegistration();
  }, [saveRegistration]); // Run when saveRegistration function is available

  // Function to handle "View Registration" button
  const handleViewRegistration = () => {
    // Navigate to submitted registration page
    navigate('/submitted');
  };

  return (
    <div className="container">
      <div className="confirmation">
        <h1>🎉 Registration Successful!</h1>
        
        {/* Success message */}
        <div className="success-message">
          <h2>Thank You for Registering!</h2>
          <p>
            Your registration for the Tech Innovation Conference 2024 has been confirmed.
          </p>
        </div>

        {/* Additional information */}
        <div className="event-details">
          <p>
            <strong>Confirmation Details:</strong>
          </p>
          <p>Name: {formData.fullName}</p>
          <p>Email: {formData.email}</p>
          <p>Ticket Type: {formData.ticketType}</p>
          
          <p style={{ marginTop: '20px' }}>
            A confirmation email has been sent to <strong>{formData.email}</strong> 
            with your registration details and event information.
          </p>
          
          <p style={{ marginTop: '20px' }}>
            Your seat for the conference has been reserved. We look forward to seeing you there!
          </p>
        </div>

        {/* Button to view full registration */}
        <div className="button-container">
          <button onClick={handleViewRegistration}>
            View My Registration
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmationPage;
