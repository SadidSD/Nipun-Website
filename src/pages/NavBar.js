import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../images/logo.png'

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()
  const isLightText = ['/about', '/career'].includes(pathname)
  const linkTextClass = isLightText ? 'text-[#FAEDCD] hover:text-white' : 'text-black hover:text-gray-600'

  return (
    <>
      <nav className="absolute top-0 left-0 w-full z-50 bg-transparent backdrop-blur-none px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/"><img src={logo} alt="Logo" className="md:h-10 h-16 w-auto" /></Link>
        </div>
        <div className="hidden md:flex flex-1 justify-center space-x-[7vw] text-lg font-light">
          <Link to="/about" className={`${linkTextClass} text-[2rem] transition duration-200`}>About</Link>
          <Link to="/projects" className={`${linkTextClass} text-[2rem] transition duration-200`}>Projects</Link>
          <Link to="/gallery" className={`${linkTextClass} text-[2rem] transition duration-200`}>Gallery</Link>
          <Link to="/career" className={`${linkTextClass} text-[2rem] transition duration-200`}>Career</Link>
        </div>
        <div className="md:hidden">
          <button className={linkTextClass} onClick={() => setMenuOpen(true)}>
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
      {menuOpen && (
        <div className="fixed inset-0 bg-white z-[999] flex flex-col justify-center items-center space-y-10 text-2xl font-light overflow-hidden w-[100vw]">
          <div className="absolute inset-0 pointer-events-none noise-overlay z-10"></div>
          <button className="absolute top-6 right-6 text-black text-4xl" onClick={() => setMenuOpen(false)}>&times;</button>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
          <Link to="/gallery" onClick={() => setMenuOpen(false)}>Gallery</Link>
          <Link to="/career" onClick={() => setMenuOpen(false)}>Career</Link>
        </div>
      )}
    </>
  )
}

export default NavBar
