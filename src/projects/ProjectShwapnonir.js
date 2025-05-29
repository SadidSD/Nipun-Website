import React, { useEffect, useState, useRef } from 'react'
import image1 from '../images/project-shwapnonir.jpg'
import image2 from '../images/image2.jpg'
import projects from '../pages/data'
import { motion, useScroll, useTransform } from "framer-motion"

export default function ProjectShwapnonir() {
  const shwapnonir = projects.find(p => p.title === 'Nipun Shwapnonir')

  const [target1, setTarget1] = useState(false)
  const [target2, setTarget2] = useState(false)

  const scrollContainerRef = useRef(null)
  const imageRef = useRef(null)
  const [fixedPosition, setFixedPosition] = useState('30vh')
  const [fixedPosition2, setFixedPosition2] = useState('0vh')

  const { scrollYProgress } = useScroll({ target: scrollContainerRef, offset: ['start start', 'end end'] })
  const imageMove = useTransform(scrollYProgress, [0.45, 0.97], ['0vw', '-50vw'])

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
      if (scrollPercent >= 0.45 && scrollPercent < 0.97) {
        setTarget1(true)
        setTarget2(false)

        if (imageRef.current) {
          const rect = imageRef.current.getBoundingClientRect()
          const viewportTopPx = rect.top
          const viewportVh = (viewportTopPx / window.innerHeight) * 100
          setFixedPosition(`${viewportVh.toFixed(2)}vh`)
        }

      } else if (scrollPercent >= 0.97) {
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

  return (
    <div
      ref={scrollContainerRef}
      className="relative w-full min-h-[200vh] overflow-x-hidden overflow-y-scroll bg-gradient-to-r from-[#FDF1E2] via-[#F9F1E3] to-[#E3D29C]"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#FDF1E2] via-[#F9F1E3] to-[#E3D29C] mix-blend-soft-light opacity-50"></div>
      <div className="absolute inset-0 pointer-events-none noise-overlay z-10"></div>

      <img
        src={image2}
        className="relative top-[-30vh] z-0 w-full object-cover object-top h-[80vh]"
        alt="About background"
      />

      <div className="relative top-[-20vh] z-20 flex flex-col items-center text-center px-4">
        <h2 className="text-4xl font-semibold">NIPUN SHWAPNONIR</h2>
        <img
          src={image1}
          alt="Shwapnonir"
          className="mt-6 w-[85vw] max-w-[600px] lg:hidden rounded-[40px] shadow-[10px_10px_4px_white] object-contain"
        />
      </div>

      <motion.img
        ref={imageRef}
        src={image1}
        alt="Shwapnonir"
        className="hidden lg:block w-[25vw] absolute left-[62.55vw] top-[75vh] rounded-[40px] object-contain"
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
            <h3 className="text-[2vw] font-medium text-gray-700">At a glance</h3>
            <div className="space-y-4 text-gray-700 text-[1vw]">
              {[ 
                ['Project Name:', shwapnonir.title],
                ['Location:', shwapnonir.location],
                ['Land Area:', shwapnonir.landArea],
                ['Height:', shwapnonir.height],
                ['Total Flat:', shwapnonir.totalFlat],
                ['Total Car Parking:', shwapnonir.totalCarParking],
                ['Possible Handover Date:', shwapnonir.handover],
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
              ['Project Name:', shwapnonir.title],
              ['Location:', shwapnonir.location],
              ['Land Area:', shwapnonir.landArea],
              ['Height:', shwapnonir.height],
              ['Total Flat:', shwapnonir.totalFlat],
              ['Total Car Parking:', shwapnonir.totalCarParking],
              ['Possible Handover Date:', shwapnonir.handover],
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
          className="hidden lg:flex justify-end px-2 relative left-[-2vw] py-[25vh]"
          initial={{ opacity: 0, y: 20 }}
          animate={target2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <div className="w-full lg:w-[50%] space-y-4">
            <h3 className="text-[2vw] font-medium text-gray-700">Special Features</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-[1vw]">
              {shwapnonir.specialFeatures.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Mobile Special Features */}
        <div className="lg:hidden w-full px-2 pt-10">
          <h3 className="text-[5vw] font-medium text-gray-700">Special Features</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-[4vw]">
            {shwapnonir.specialFeatures.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
