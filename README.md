# Tech Conference Event Registration System

A simple React application for conference registration with client-side routing and local storage.

## How to Run

1. Install dependencies:
```
npm install
```

2. Start the development server:
```
npm start
```

3. Open your browser to http://localhost:3000

## Features

- Event information page
- Multi-step registration form
- Review page before submission
- Confirmation page
- Returning user detection using localStorage
- Cancel registration option

## How It Works

1. **Event Info Page**: Shows conference details and Register button
2. **Registration Form**: Collects user information
3. **Review Page**: Shows summary of entered data
4. **Confirmation Page**: Saves data to localStorage
5. **Submitted Registration**: Shows details for returning users

## Key Concepts

- **React Router**: Client-side routing between pages
- **Lifted State**: Form data stored in App.js and shared with child components
- **localStorage**: Persists registration data in browser
- **Conditional Rendering**: Shows different pages based on registration status
