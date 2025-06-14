// src/pages/NavBar.js
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../images/logo.png'

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()

  // Always black text for desktop links; hover to gray-600
  const baseTextColor = 'text-black'
  const hoverTextColor = 'hover:text-gray-600'
  const linkFontClass = 'font-josefin'

  // Links for main routes
  const links = [
    { to: '/about', label: 'About' },
    { to: '/projects', label: 'Projects' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/career', label: 'Career' },
  ]

  return (
    <>
      {/* Nav wrapper: on mobile, a bit lower (top-6); on desktop, top-4 */}
      <nav className="fixed top-2 md:top-1 left-1/2 transform -translate-x-1/2 z-50 w-full px-4 pointer-events-none">
        {/* 
          Inner container:
          - flex justify-between items-center always.
          - On desktop (md+): pill styling bg/blur/rounding/padding/shadow.
          - On mobile: transparent background (no pill).
        */}
        <div
          className={`
            relative mx-auto max-w-3xl flex justify-between items-center w-full pointer-events-auto
            md:bg-white/30 md:backdrop-blur-md md:rounded-3xl md:px-8 md:py-3 md:drop-shadow-lg
          `}
        >
          {/* Logo: on mobile, use top-6; on desktop, center vertically */}
          <Link
            to="/"
            className="absolute left-4 top-6 md:top-1/2 md:transform md:-translate-y-1/2"
          >
            <img src={logo} alt="Logo" className="h-10 w-auto" />
          </Link>

          {/* Desktop links: centered; hidden on mobile */}
          <div className="hidden md:flex justify-center space-x-12 w-full">
            {links.map((item) => {
              // Always black text, no active override
              const underlineClasses = (pathname === item.to) ? 'w-full' : 'w-0 group-hover:w-full'
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`
                    relative group 
                    ${baseTextColor} ${hoverTextColor} ${linkFontClass} 
                    text-2xl font-light
                    px-1 py-1 transition-transform duration-200 ease-out
                    hover:-translate-y-0.5 hover:scale-105
                  `}
                >
                  <span className="relative inline-block">
                    {item.label}
                    <span
                      className={`
                        absolute left-0 -bottom-0.5 h-[2px] bg-current
                        transition-[width] duration-300 ease-out
                        ${underlineClasses}
                      `}
                    />
                  </span>
                </Link>
              )
            })}
          </div>

          {/* Mobile hamburger: on mobile, use top-6; on desktop it's hidden */}
          <div className="md:hidden absolute right-4 top-6">
            <button
              className={`${baseTextColor} ${hoverTextColor} focus:outline-none`}
              onClick={() => setMenuOpen(true)}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-white z-[999] flex flex-col justify-center items-center space-y-10 overflow-hidden">
          {/* Optional noise overlay behind */}
          <div className="absolute inset-0 pointer-events-none noise-overlay z-10"></div>
          <button
            className="absolute top-6 right-6 text-black text-4xl focus:outline-none"
            onClick={() => setMenuOpen(false)}
          >
            &times;
          </button>
          {links.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="z-20 text-3xl font-josefin text-black hover:text-gray-600
                         transition transform hover:-translate-y-0.5 duration-200"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </>
  )
}

export default NavBar
