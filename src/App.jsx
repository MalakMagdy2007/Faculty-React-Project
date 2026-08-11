import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FacultyPage } from './pages/FacultyPage';
import { FacultyDetailPage } from './pages/FacultyDetailPage';
import { ServicesPage } from './pages/ServicesPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FacultyPage />} />
        <Route path="/faculty" element={<FacultyPage />} />
        <Route path="/faculty/:id" element={<FacultyDetailPage />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>
    </Router>
  );
}

export default App;