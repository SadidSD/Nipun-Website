// src/pages/Projects.js
import React, { useState } from 'react'
import projects from './data'
import { Link } from 'react-router-dom'

function Projects() {
  const [filter, setFilter] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredProjects = projects.filter(project =>
    (filter === 'all' || project.type === filter) &&
    project.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-r from-[#FDF1E2] via-[#F9F1E3] to-[#E3D29C]">
      <div className="absolute inset-0 bg-gradient-to-r from-[#FDF1E2] via-[#F9F1E3] to-[#E3D29C] mix-blend-soft-light opacity-50" />
      <div className="absolute inset-0 pointer-events-none noise-overlay z-10" />

      <div className="relative z-20 p-6">
        <h1 className="text-[10vw] md:text-[3vw] text-center mt-16 mb-8 font-josefin font-light text-[#4E3B2C]">
          Exclusive Projects
        </h1>

        <div className="flex flex-col sm:flex-row justify-between items-center bg-[#5B3A29] text-white md:rounded-full rounded-md px-4 py-2 w-full max-w-[800px] mx-auto gap-3">
          <select
            value={filter}
            onChange={e => setFilter(e.target.value)}
            className="w-full sm:w-auto bg-[#5B3A29] text-white outline-none border-none rounded-full px-3 py-1 text-lg"
          >
            <option value="all">All</option>
            <option value="ongoing">Ongoing</option>
            <option value="completed">Completed</option>
            <option value="upcoming">Upcoming</option>
          </select>

          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full sm:w-[35%] text-white bg-transparent border border-white px-4 py-2 my-3 rounded-full text-base text-center sm:text-left placeholder:text-white outline-none"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-8 sm:gap-8 justify-items-center mt-16">
          {filteredProjects.map((project, index) => (
            <Link
              to={project.link}
              key={index}
              className="w-full flex flex-col items-start no-underline"
            >
              <div className="w-full aspect-[3/4] sm:w-[20vw] sm:aspect-auto bg-gray-300 rounded-2xl sm:rounded-md overflow-hidden shadow-md">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-4 text-[#3D2B1F]">
                <p className="font-medium text-xl font-josefin">{project.title}</p>
                <p className="text-base">{project.location}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
