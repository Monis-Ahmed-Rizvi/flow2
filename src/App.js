import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './components/marketing/LandingPage';
import AuthScreens from './components/auth/AuthScreens';
import BusinessProfileSetup from './components/profile/BusinessProfileSetup';
import Dashboard from './components/dashboard/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<AuthScreens />} />
        <Route path="/signup" element={<AuthScreens />} />
        <Route path="/business-profile" element={<BusinessProfileSetup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;