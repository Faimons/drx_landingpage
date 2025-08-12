import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FastAILandingPage from './LandingPage';
import FastAISetupPage from './SetupPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FastAILandingPage />} />
        <Route path="/setup" element={<FastAISetupPage />} />
      </Routes>
    </Router>
  );
}