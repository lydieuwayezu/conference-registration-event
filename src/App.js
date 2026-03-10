app.js

// Main App component that handles routing and state management
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import EventInfo from './pages/EventInfo';
import RegistrationForm from './pages/RegistrationForm';
import ReviewPage from './pages/ReviewPage';
import ConfirmationPage from './pages/ConfirmationPage';
import SubmittedRegistration from './pages/SubmittedRegistration';

function App() {
  // State to store all registration form data
  // This is "lifted state" - stored in parent component and shared with children
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    organization: '',
    ticketType: 'Standard',
    dietaryRequirements: '',
    additionalNotes: ''
  });

  // State to track if user has already registered
  const [isRegistered, setIsRegistered] = useState(false);

  // useEffect runs when component first loads
  // Check if user has already registered by looking in localStorage
  useEffect(() => {
    // localStorage.getItem() retrieves data saved in browser
    const savedRegistration = localStorage.getItem('conferenceRegistration');
    
    // If data exists, user has already registered
    if (savedRegistration) {
      // Parse JSON string back to JavaScript object
      const parsedData = JSON.parse(savedRegistration);
      setFormData(parsedData); // Load their saved data
      setIsRegistered(true); // Mark as registered
    }
  }, []); // Empty array means this runs only once when app loads

  // Function to update form data
  // This will be passed to child components so they can update the state
  const updateFormData = (newData) => {
    setFormData(newData);
  };

  // Function to save registration to localStorage
  const saveRegistration = () => {
    // Convert JavaScript object to JSON string and save to browser
    localStorage.setItem('conferenceRegistration', JSON.stringify(formData));
    setIsRegistered(true);
  };

  // Function to clear registration (for cancellation)
  const clearRegistration = () => {
    // Remove data from localStorage
    localStorage.removeItem('conferenceRegistration');
    // Reset form data to empty
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      organization: '',
      ticketType: 'Standard',
      dietaryRequirements: '',
      additionalNotes: ''
    });
    setIsRegistered(false);
  };

  return (
    // BrowserRouter enables client-side routing
    <BrowserRouter>
      <Routes>
        {/* Route for home page - Event Information */}
        <Route 
          path="/" 
          element={
            // If user already registered, redirect to their registration page
            isRegistered ? 
              <Navigate to="/submitted" /> : 
              <EventInfo />
          } 
        />
        
        {/* Route for registration form */}
        <Route 
          path="/register" 
          element={
            isRegistered ? 
              <Navigate to="/submitted" /> : 
              <RegistrationForm 
                formData={formData} 
                updateFormData={updateFormData} 
              />
          } 
        />
        
        {/* Route for review page */}
        <Route 
          path="/review" 
          element={
            isRegistered ? 
              <Navigate to="/submitted" /> : 
              <ReviewPage formData={formData} />
          } 
        />
        
        {/* Route for confirmation page */}
        <Route 
          path="/confirmation" 
          element={
            isRegistered ? 
              <Navigate to="/submitted" /> : 
              <ConfirmationPage 
                formData={formData} 
                saveRegistration={saveRegistration} 
              />
          } 
        />
        
        {/* Route for returning users who already registered */}
        <Route 
          path="/submitted" 
          element={
            isRegistered ? 
              <SubmittedRegistration 
                formData={formData} 
                clearRegistration={clearRegistration} 
              /> : 
              <Navigate to="/" />
          } 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
