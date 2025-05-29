import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import polygon from '../images/polygon.png';
import Projectsec from './Projectsec';
import ProjectsMap from './ProjectsMap';
import Footer from './Footer';
import location from '../images/location.png';
import security from '../images/security.png';
import architecture from '../images/architecture.png';
import { useNavigate } from 'react-router-dom';

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      type: 'spring',
      stiffness: 100,    // controls spring tightness (higher = snappier)
      damping: 20,       // controls how much spring bounces (higher = less bounce)
      mass: 1,
    }
  },
};

function Home() {
  const [scrollVH, setScrollVH] = useState(0);
  const [target1, setTarget1] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const navigate = useNavigate(); // ✅ Correct placement

  const scrollImages = [location, security, architecture];

  useEffect(() => {
    const handleScroll = () => {
      const vh = window.innerHeight;
      const scrollPosition = window.scrollY;
      const scrollInVH = scrollPosition / vh;
      setScrollVH(scrollInVH);

      if (scrollInVH >= 1 && scrollInVH < 2) {
        setActiveImageIndex(0);
      } else if (scrollInVH >= 2 && scrollInVH < 3) {
        setActiveImageIndex(1);
      } else if (scrollInVH >= 3 && scrollInVH < 4) {
        setActiveImageIndex(2);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (scrollVH >= 1) {
      setTarget1(1);
    } else {
      setTarget1(0);
    }
  }, [scrollVH]);

  return (
    <div className="relative w-full md:h-[600vh] h-[700vh] bg-gradient-to-r from-[#FDF1E2] via-[#F9F1E3] via-20% to-[#E3D29C]">
      <div className="absolute inset-0 bg-gradient-to-r from-[#FDF1E2] via-[#F9F1E3] via-10% to-[#E3D29C] mix-blend-soft-light opacity-50"></div>
      <div className="absolute inset-0 pointer-events-none noise-overlay z-10"></div>

      <div className='h-[100vh] w-full'>
        <motion.img
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          src={image1}
          alt="Image1"
          className={`${target1 ? 'hidden' : 'fixed'} md:right-[15vw] md:top-[30vh] md:w-[30vw] h-auto md:rounded-[35px] rounded-[20px] shadow-[3px_3px_0_white] w-[60vw] top-[13vh] right-[10vw]`}
        />

        <motion.img
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ delay: 0.3 }}
          src={image2}
          alt="Image2"
          className={`${target1 ? 'hidden' : 'fixed'} md:right-[6vw] md:top-[50vh] md:w-[30vw] h-auto md:rounded-[35px] rounded-[20px] shadow-[3px_3px_0_white] w-[60vw] top-[23vh] right-[20vw]`}
        />

        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ delay: 0.6 }}
          className={`${target1 ? 'hidden' : 'fixed'} md:top-[30vh] md:left-[5vw] md:text-[4.5vw] md:text-left text-center left-[13vw] top-[45vh] text-[9vw] font-josefin font-light text-[#4E3B2C]`}
        >
          We Design your
          <br />
          Hope Fulfilling your
          <br />
          Taste
        </motion.p>

         <motion.button
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ delay: 0.1 }}
          onClick={() => navigate('/projects')}
          whileHover={{
    scale: 1.05,
    backgroundColor: "#D4AF37",
    color: "#fff",
    
  }}
          className={`${target1 ? 'hidden' : 'fixed'} border-2 md:text-[2vw] rounded-[111px] p-[3vh] md:px-20 border-[#D4AF37] md:top-[75vh] md:left-[5vw] top-[70vh] left-[11vw] px-16 text-[6vw] font-josefin font- text-[#4E3B2C]`}
        >
          Book Apartment
        </motion.button>
        </div>

      <div className="sticky top-0 md:mb-[100vh] mb-[275vh] w-full bg-transparent">
        <img src={polygon} alt="polygon" className=" top-0 w-full md:h-auto h-[140vh]" />
        <div className="hidden md:block absolute top-[25vh] left-[10vw]">
          <div className="absolute -top-4 -left-4 w-[25vw] h-[65vh] bg-white rounded-[35px]"></div>
          <div className="relative w-[25vw] h-[65vh] bg-white rounded-[35px] z-10 overflow-hidden flex items-center justify-center">
            <img
              src={scrollImages[activeImageIndex]}
              alt="Feature"
              className="w-full h-full object-cover rounded-[35px] transition-all duration-700"
            />
          </div>
        </div>
      </div>

      <img src={location} className='md:hidden absolute top-[105vh] left-[25vw] w-[50vw] rounded-[35px]' alt="" />
      <img src={security} className='md:hidden absolute top-[205vh] left-[25vw] w-[50vw] rounded-[35px]' alt="" />
      <img src={architecture} className='md:hidden absolute top-[305vh] left-[25vw] w-[50vw] rounded-[35px]' alt="" />

      <p className="absolute md:top-[140vh] md:text-[5vw] md:right-[16vw] text-[#FAEDCD] top-[145vh] text-[10vw] right-[13vw] font-josefin font-light">Perfect Location</p>
      <p className="absolute md:top-[160vh] md:text-[2vw] md:right-[10vw] text-white md:max-w-[40vw] leading-tight top-[155vh] max-w-[90vw] right-[3vw] text-[6vw] font-titillium">
        Nestled in the heart of the city with easy access to malls, restaurants, parks, and public transport. Live close to everything that matters.
      </p>

      <p className="absolute md:top-[240vh] md:text-[5vw] md:right-[12vw] text-[#FAEDCD] top-[245vh] text-[10vw] right-[3vw] font-josefin font-light">24/7 Security Service</p>
      <p className="absolute md:top-[260vh] md:text-[2vw] md:right-[16vw] text-white md:max-w-[40vw] leading-tight top-[255vh] max-w-[90vw] right-[3vw] text-[6vw] font-titillium">
        Enjoy peace of mind with round-the-clock surveillance, secure access systems, and on-site security personnel.
      </p>

      <p className="absolute md:top-[340vh] md:text-[5vw] md:right-[12vw] text-[#FAEDCD] top-[345vh] text-[10vw] right-[3vw] font-josefin font-light">Modern Architecture</p>
      <p className="absolute md:top-[360vh] md:text-[2vw] md:right-[14vw] text-white md:max-w-[40vw] leading-tight top-[355vh] max-w-[90vw] right-[3vw] text-[6vw] font-titillium">
        Designed with a blend of innovation and elegance, our buildings reflect the latest in contemporary aesthetics and functionality.
      </p>

      <div className="absolute md:top-[500vh] top-[450vh] w-full h-100vh">
        <Projectsec />
      </div>
    </div>
  );
}

export default Home;
