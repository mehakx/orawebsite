import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import HowItWorksPage from './pages/HowItWorksPage';
import UseCasesPage from './pages/UseCasesPage';
import TryOraPage from './pages/TryOraPage';
import BlogPage from './pages/BlogPage';
import PodcastPage from './pages/PodcastPage';
import ContactPage from './pages/ContactPage';

import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/use-cases" element={<UseCasesPage />} />
          <Route path="/try-ora" element={<TryOraPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/podcast" element={<PodcastPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
