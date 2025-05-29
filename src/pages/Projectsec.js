import React, { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom' // If you're using React Router
import nipuncity from '../images/project-nipun.jpg'
import shwapnonir from '../images/project-shwapnonir.jpg'
import shariar from '../images/project-shariar.jpg'
import arrowright from '../images/arrowright.png'
import arrowleft from '../images/arrowleft.png'

function Projectsec() {
  const containerRef = useRef(null)

  const projects = [
    {
      title: 'Nipun City',
      image: nipuncity,
      location: 'Birulia Road, Savar',
      link: '/projects/ProjectNipun',
    },
    {
      title: 'Nipun Shwapnonir',
      image: shwapnonir,
      location: 'Malancha, Savar',
      link: '/projects/ProjectShwapnonir',
    },
    {
      title: 'Nipun Shariar Tower',
      image: shariar,
      location: 'Thana Road, Savar',
      link: '/projects/ProjectShariar',
    },
  ]

  const [rightscrollable, setRightScrollable] = useState(projects.length - 3)
  const [leftscrollable, setLeftScrollable] = useState(0)
  const [showrightarrow, setShowRightArrow] = useState(false)
  const [showleftarrow, setShowLeftArrow] = useState(false)

  useEffect(() => {
    setShowRightArrow(rightscrollable > 0)
  }, [rightscrollable])

  useEffect(() => {
    setShowLeftArrow(leftscrollable > 0)
  }, [leftscrollable])

  const scrollRight = () => {
    const vw = window.innerWidth * 0.3
    setRightScrollable(rightscrollable - 1)
    setLeftScrollable(leftscrollable + 1)
    containerRef.current.scrollBy({ left: vw + 80, behavior: 'smooth' })
  }

  const scrollLeft = () => {
    const vw = window.innerWidth * 0.3
    setRightScrollable(rightscrollable + 1)
    setLeftScrollable(leftscrollable - 1)
    containerRef.current.scrollBy({ left: -vw - 80, behavior: 'smooth' })
  }

  return (
    <div className="absolute w-full h-[100vh]">
      <p className="md:pl-[30%] md:text-[3vw] text-[9vw] mx-[5vw] font-josefin font-light text-[#4E3B2C]">Our Exclusive Projects</p>
      <div className="relative">
        {showleftarrow && (
          <img
            onClick={scrollLeft}
            className="hidden md:block absolute w-[4vw] h-auto top-[45%] left-[1vw] cursor-pointer"
            src={arrowleft}
            alt="Scroll Left"
          />
        )}
        <div
          ref={containerRef}
          className="flex flex-col md:flex-row overflow-hidden md:overflow-x-auto scroll-smooth whitespace-normal md:whitespace-nowrap hide-scrollbar py-16"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center mb-8 md:mb-0 ${
                index > 2 ? 'hidden md:flex' : ''
              } min-w-full md:min-w-[33.33vw]`}
            >
              <a href={project.link} className="flex flex-col items-center">
                <p className="text-[2rem] py-4 font-josefin font-normal text-[#4E3B2C]">{project.title}</p>
                <img
                  className="w-[80%] md:w-[18vw] h-auto rounded-[38px]"
                  src={project.image}
                  alt={project.title}
                />
                <div className="w-[80%] md:w-[15vw] flex items-center mt-4">
                  <span className="flex-grow border-t border-black"></span>
                  <span className="ml-2 text-[1rem] font-martel">{project.location}</span>
                </div>
              </a>
            </div>
          ))}
        </div>
        {showrightarrow && (
          <img
            onClick={scrollRight}
            className="hidden md:block absolute w-[4vw] h-auto top-[45%] right-[1vw] cursor-pointer"
            src={arrowright}
            alt="Scroll Right"
          />
        )}
      </div>
    </div>
  )
}

export default Projectsec
