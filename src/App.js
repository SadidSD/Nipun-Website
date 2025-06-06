// src/App.js
import React from 'react'
import './pages/fonts.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Career from './pages/Career'
import Gallery from './pages/Gallery'
import Projects from './pages/Projects'
import NavBar from './pages/NavBar'
import ProjectsMap from './pages/ProjectsMap'
import Footer from './pages/Footer'
import ProjectPage from './pages/ProjectPage'

// Import individual project pages
import ProjectNipun from './projects/ProjectNipun'
import ProjectShwapnonir from './projects/ProjectShwapnonir'
import ProjectShariar from './projects/ProjectShariar'

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/career" element={<Career />} />
        <Route path="/projects/:id" element={<ProjectPage />} />
      </Routes>
      <ProjectsMap />
      <Footer />
    </Router>
  )
}

export default App
