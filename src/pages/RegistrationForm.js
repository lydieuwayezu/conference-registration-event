


// Registration Form Page - Where users enter their information
import React from 'react';
import { useNavigate } from 'react-router-dom';

function RegistrationForm({ formData, updateFormData }) {
  // Hook to navigate between pages
  const navigate = useNavigate();

  // Function to handle input changes
  // This updates the formData state in App.js
  const handleChange = (e) => {
    // e.target.name is the input field name (e.g., "fullName")
    // e.target.value is what the user typed
    updateFormData({
      ...formData, // Keep all existing data
      [e.target.name]: e.target.value // Update only the changed field
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    
    // Basic validation - check if required fields are filled
    if (!formData.fullName || !formData.email || !formData.phone) {
      alert('Please fill in all required fields');
      return;
    }
    
    // Navigate to review page
    navigate('/review');
  };

  return (
    <div className="container">
      <h1>Event Registration Form</h1>
      
      {/* Form element with onSubmit handler */}
      <form onSubmit={handleSubmit}>
        
        {/* Full Name input */}
        <div className="form-group">
          <label>Full Name *</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
          />
        </div>

        {/* Email input */}
        <div className="form-group">
          <label>Email Address *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your.email@example.com"
            required
          />
        </div>

        {/* Phone input */}
        <div className="form-group">
          <label>Phone Number *</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+1 (555) 123-4567"
            required
          />
        </div>

        {/* Organization input */}
        <div className="form-group">
          <label>Organization/Institution</label>
          <input
            type="text"
            name="organization"
            value={formData.organization}
            onChange={handleChange}
            placeholder="Your company or school"
          />
        </div>

        {/* Ticket Type dropdown */}
        <div className="form-group">
          <label>Ticket Type *</label>
          <select
            name="ticketType"
            value={formData.ticketType}
            onChange={handleChange}
            required
          >
            <option value="Standard">Standard - $99</option>
            <option value="VIP">VIP - $299</option>
            <option value="Student">Student - $49</option>
          </select>
        </div>

        {/* Dietary Requirements input */}
        <div className="form-group">
          <label>Dietary Requirements</label>
          <input
            type="text"
            name="dietaryRequirements"
            value={formData.dietaryRequirements}
            onChange={handleChange}
            placeholder="e.g., Vegetarian, Vegan, Gluten-free"
          />
        </div>

        {/* Additional Notes textarea */}
        <div className="form-group">
          <label>Additional Notes or Comments</label>
          <textarea
            name="additionalNotes"
            value={formData.additionalNotes}
            onChange={handleChange}
            placeholder="Any special requests or questions?"
          />
        </div>

        {/* Submit button */}
        <div className="button-container">
          <button type="button" className="secondary" onClick={() => navigate('/')}>
            Back
          </button>
          <button type="submit">
            Continue to Review
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegistrationForm;
