import React, { useEffect, useState, useRef } from 'react'
import { useParams } from 'react-router-dom'
import projects from '../pages/data' // your projects array
import { motion, useScroll, useTransform } from 'framer-motion'

export default function ProjectPage() {
  const { id } = useParams() // get id from URL params as string
  const projectId = parseInt(id, 10) // convert id to number
  const project = projects.find(p => p.id === projectId)

  // Existing states & refs
  const [target1, setTarget1] = useState(false)
  const [target2, setTarget2] = useState(false)

  const scrollContainerRef = useRef(null)
  const imageRef = useRef(null)

  const [fixedPosition, setFixedPosition] = useState('30vh')
  const [fixedPosition2, setFixedPosition2] = useState('0vh')

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ top: 0, behavior: 'auto' });
    }
    // Optionally also:
    // window.scrollTo(0, 0);
  }, [id]);

  // NEW: State to toggle form visibility
  const [showForm, setShowForm] = useState(false)

  const { scrollYProgress } = useScroll({ target: scrollContainerRef, offset: ['start start', 'end end'] })
  const imageMove = useTransform(scrollYProgress, [0.47, 1], ['0vw', '-50vw'])

  const imageAnimation = (() => {
    if (target1) {
      return {
        x: imageMove,
        position: 'fixed',
        top: fixedPosition,
        transition: { type: 'spring', duration: 1 }
      }
    } else if (target2) {
      return {
        position: 'absolute',
        top: fixedPosition2,
        x: '-50vw',
      }
    } else {
      return {
        position: 'absolute',
        top: '70vh',
        x: '0vw',
      }
    }
  })()

  useEffect(() => {
    let highestTopPx = null

    const unsubscribe = scrollYProgress.on('change', (scrollPercent) => {
      if (scrollPercent >= 0.45 && scrollPercent < 1) {
        setTarget1(true)
        setTarget2(false)

        if (imageRef.current) {
          const rect = imageRef.current.getBoundingClientRect()
          const viewportTopPx = rect.top
          const viewportVh = (viewportTopPx / window.innerHeight) * 100
          setFixedPosition(`${viewportVh.toFixed(2)}vh`)
        }
      } else if (scrollPercent >= 1) {
        setTarget2(true)
        setTarget1(false)

        if (imageRef.current) {
          const rect = imageRef.current.getBoundingClientRect()
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop
          const absoluteTopPx = rect.top + scrollTop

          if (highestTopPx === null || absoluteTopPx < highestTopPx) {
            highestTopPx = absoluteTopPx
          }
          const absoluteVh = (highestTopPx / window.innerHeight) * 100
          setFixedPosition2(`${absoluteVh.toFixed(2)}vh`)
        }
      } else {
        setTarget1(false)
        setTarget2(false)
        highestTopPx = null
      }
    })

    return () => unsubscribe()
  }, [scrollYProgress])

  if (!project) return <div>Project not found</div>

  // Current date string, e.g. "June 3, 2025"
  const currentDate = new Date().toLocaleDateString(undefined, {
    year: 'numeric', month: 'long', day: 'numeric'
  })

  return (
    <div
      ref={scrollContainerRef}
      className="relative w-full min-h-[220vh] overflow-x-hidden bg-gradient-to-r from-[#FDF1E2] via-[#F9F1E3] to-[#E3D29C]"
    >
      {/* Your background and image sections */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#FDF1E2] via-[#F9F1E3] to-[#E3D29C] mix-blend-soft-light opacity-50"></div>
      <div className="absolute inset-0 pointer-events-none noise-overlay z-10"></div>

      <img
        src={project.background}
        className="relative top-[-30vh] z-0 w-full object-cover h-[80vh]"
         style={{ objectPosition: 'center 70%' }}
        alt={`${project.title} background`}
      />

      <div className="relative top-[-20vh] z-20 flex flex-col items-center text-center px-4">
        <h2 className="text-4xl font-semibold font-josefin text-[#4E3B2C] ">{project.title.toUpperCase()}</h2>
        <img
          src={project.image}
          alt={`${project.title} view`}
          className="mt-6 w-[85vw] max-w-[600px] lg:hidden rounded-[40px] shadow-[10px_10px_4px_white] object-contain"
        />
      </div>

      <motion.img
        ref={imageRef}
        src={project.image}
        alt={`${project.title} view`}
        className="hidden lg:block w-[25vw] absolute left-[62.55vw] top-[70vh] rounded-[40px] object-contain"
        style={imageAnimation}
        animate={{
          boxShadow: target1
            ? '0px 25px 45px rgba(0, 0, 0, 0.35)'
            : '0px 0px 0px rgba(0, 0, 0, 0)',
        }}
        transition={{
          boxShadow: { duration: 0.5, ease: 'easeInOut' },
        }}
      />

      <div className="relative top-[-10vh] z-20 flex flex-col gap-[10vh] px-[5vw]">
        {/* Desktop Info */}
        <motion.div
          className="hidden lg:flex flex-row justify-between items-start gap-[0vh]"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={target1 ? { opacity: 0, scale: 0.95 } : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <div className="w-[45vw] space-y-6">
            <h3 className="text-[2vw] font-medium text-gray-700 font-josefin">At a glance</h3>
            <div className="space-y-4 text-gray-700 text-[1vw] font-titillium">
              {[
                ['Project Name:', project.title],
                ['Location:', project.location],
                ['Land Area:', project.landArea],
                ['Height:', project.height],
                ['Total Flat:', project.totalFlat],
                ['Total Car Parking:', project.totalCarParking],
                ['Possible Handover Date:', project.type === 'ongoing' ? project.handover || 'N/A' : 'Completed'],
              ].map(([label, value], index) => (
                <div key={index} className="flex flex-col">
                  <div className="flex justify-between w-full">
                    <span className="font-semibold">{label}</span>
                    <span className="text-right">{value}</span>
                  </div>
                  <div className="h-[1px] w-full bg-gray-400 mt-1"></div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Mobile Info */}
        <div className="lg:hidden w-full space-y-6 px-2">
          <h3 className="text-[5vw] font-medium text-gray-700">At a glance</h3>
          <div className="space-y-4 text-gray-700 text-[4vw]">
            {[
              ['Project Name:', project.title],
              ['Location:', project.location],
              ['Land Area:', project.landArea],
              ['Height:', project.height],
              ['Total Flat:', project.totalFlat],
              ['Total Car Parking:', project.totalCarParking],
              ['Possible Handover Date:', project.type === 'ongoing' ? project.handover || 'N/A' : 'Completed'],
            ].map(([label, value], index) => (
              <div key={index} className="flex flex-col">
                <div className="flex justify-between w-full">
                  <span className="font-semibold">{label}</span>
                  <span className="text-right">{value}</span>
                </div>
                <div className="h-[1px] w-full bg-gray-400 mt-1"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Special Features */}
        <motion.div
          className="hidden lg:flex justify-end px-2 relative left-[5vw] py-[15vh]"
          initial={{ opacity: 0, y: 20 }}
          animate={target2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <div className="w-full lg:w-[50%] space-y-4">
            <h3 className="text-[2vw] font-medium text-gray-700 font-josefin">Special Features</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-[1vw] font-titillium">
              {project.specialFeatures.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>

            {/* Book Apartment button below Special Features */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={target2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: 'easeOut', delay: 0.15 }}
              whileHover={{
                scale: 1.05,
                backgroundColor: '#D4AF37',
                color: '#fff',
                borderColor: '#D4AF37',
              }}
              onClick={() => setShowForm(true)} // SHOW FORM instead of navigate
              className="border-2 border-[#D4AF37] rounded-[111px] py-[1.5vh] px-12 text-[#4E3B2C] text-[1.3vw] font-josefin font-semibold bg-transparent cursor-pointer relative top-[5vh]"
            >
              Book Apartment
            </motion.button>
          </div>
        </motion.div>

        {/* Mobile Special Features */}
        <div className="lg:hidden w-full px-2 pt-10">
          <h3 className="text-[5vw] font-medium text-gray-700">Special Features</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-[4vw]">
            {project.specialFeatures.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>

          {/* Mobile button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={target2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut', delay: 0.15 }}
            whileHover={{
              scale: 1.05,
              backgroundColor: '#D4AF37',
              color: '#fff',
              borderColor: '#D4AF37',
            }}
            onClick={() => setShowForm(true)} // SHOW FORM instead of navigate
            className="border-2 border-[#D4AF37] rounded-[111px] py-[3vh] px-16 text-[#4E3B2C] text-[6vw] font-josefin font-semibold bg-transparent cursor-pointer mt-8 w-full max-w-md mx-auto"
          >
            Book Now
          </motion.button>
        </div>
      </div>

      {/* FORM MODAL */}
      {showForm && (
  <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 px-4">
    <div className="bg-gradient-to-br from-[#FDF1E2] via-[#F9F1E3] to-[#E3D29C] rounded-2xl p-8 max-w-2xl w-full shadow-2xl relative overflow-y-auto max-h-[90vh]">
      <button
        onClick={() => setShowForm(false)}
        className="absolute top-4 right-4 text-[#4E3B2C] hover:text-red-600 text-2xl font-bold"
        aria-label="Close form"
      >
        &times;
      </button>
      <h2 className="text-3xl font-josefin font-bold text-[#4E3B2C] mb-1">
        {project.title} Booking Form
      </h2>
      <p className="mb-6 text-[#4E3B2C] text-sm font-medium">Date: {currentDate}</p>

      <form
  onSubmit={e => {
    e.preventDefault()
    // Handle submission logic
    alert('Form submitted!')
    setShowForm(false)
  }}
  className="grid grid-cols-1 md:grid-cols-2 gap-6 font-titillium text-[#4E3B2C]"
>
  {/* LEFT SIDE - 6 inputs */}
  <div className="space-y-4">
    {[
      { label: 'Full Name', name: 'fullName', type: 'text' },
      { label: 'Father’s Name', name: 'fatherName', type: 'text' },
      { label: 'Mother’s Name', name: 'motherName', type: 'text' },
      { label: 'Spouse Name', name: 'spouseName', type: 'text' },
      { label: 'Date of Birth', name: 'dob', type: 'date' },
      { label: 'Contact No', name: 'contact', type: 'tel' },
    ].map((field, idx) => (
      <label key={idx} className="block">
        <span className="font-semibold">{field.label}</span>
        <input
          type={field.type}
          name={field.name}
          required
          className="mt-1 block w-full rounded-md bg-white border border-gray-300 px-4 py-2 shadow-sm focus:ring-2 focus:ring-[#D4AF37] focus:outline-none"
        />
      </label>
    ))}
  </div>

  {/* RIGHT SIDE - 5 inputs */}
  <div className="space-y-4">
    {[
      { label: 'Nationality', name: 'nationality', type: 'text' },
      { label: 'National ID / Passport No', name: 'idOrPassport', type: 'text' },
      { label: 'Profession', name: 'profession', type: 'text' },
    ].map((field, idx) => (
      <label key={idx} className="block">
        <span className="font-semibold">{field.label}</span>
        <input
          type={field.type}
          name={field.name}
          required
          className="mt-1 block w-full rounded-md bg-white border border-gray-300 px-4 py-2 shadow-sm focus:ring-2 focus:ring-[#D4AF37] focus:outline-none"
        />
      </label>
    ))}

    <label className="block">
      <span className="font-semibold">Current Address</span>
      <textarea
        name="currentAddress"
        rows={2}
        required
        className="mt-1 block w-full rounded-md bg-white border border-gray-300 px-4 py-2 shadow-sm focus:ring-2 focus:ring-[#D4AF37] focus:outline-none"
      />
    </label>

    <label className="block">
      <span className="font-semibold">Permanent Address</span>
      <textarea
        name="permanentAddress"
        rows={2}
        required
        className="mt-1 block w-full rounded-md bg-white border border-gray-300 px-4 py-2 shadow-sm focus:ring-2 focus:ring-[#D4AF37] focus:outline-none"
      />
    </label>
  </div>

  {/* Submit Button spans full width on smaller screens */}
  <div className="md:col-span-2 text-center pt-4">
    <button
      type="submit"
      className="bg-[#D4AF37] hover:bg-[#b38e25] text-white font-bold py-2 px-6 rounded-full transition duration-200"
    >
      Submit Booking
    </button>
  </div>
</form>

    </div>
  </div>
)}

    </div>
  )
}
