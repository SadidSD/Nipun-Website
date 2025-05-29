import React from 'react';
import aboutbg from '../images/aboutbg.png';

// Import available director photos
import rkDheen from '../BoardOfDirectors/RK Dheen Islam.jpg';
import saifulAlam from '../BoardOfDirectors/Saiful Alam.jpg';
import ziaulHaq from '../BoardOfDirectors/Ziaul Haq.jpg';
import nurulAlam from '../BoardOfDirectors/Nurul Alam.jpg';
import muniruzzaman from '../BoardOfDirectors/Md. Muniruzzaman.jpeg';
import sumonShaha from '../BoardOfDirectors/Sumon Chandra Shaha.jpg';
import sanjidaAkter from '../BoardOfDirectors/Mrs. Sanjida Akter.jpg';
import Aklima from '../BoardOfDirectors/Aklima.jpg'; 
import kamruzzaman from '../BoardOfDirectors/Nayan1.jpg';

// Online placeholder URL
const placeholder = "https://via.placeholder.com/150?text=Photo+Missing";

const directors = [
  { 
    id: 1, 
    name: 'Md: Razaul Karim Dheen Islam', 
    designation: 'Chairman', 
    img: rkDheen 
  },
  { 
    id: 2, 
    name: 'Saiful Alam', 
    designation: 'Managing Director', 
    img: saifulAlam 
  },
  { 
    id: 3, 
    name: 'Ziaul Haq', 
    designation: 'Vice Chairman', 
    img: ziaulHaq 
  },
  { 
    id: 4, 
    name: 'Shaiful Kabir', 
    designation: 'Executive Director', 
    img: placeholder
  },
  { 
    id: 5, 
    name: 'Aklima Begum', 
    designation: 'Director', 
    img: Aklima
  },
  { 
    id: 6, 
    name: 'Shah Md: Kamruzzaman', 
    designation: 'Director', 
    img: kamruzzaman
  },
  { 
    id: 7, 
    name: 'Md: Nurul Alam Talukdar', 
    designation: 'Director', 
    img: nurulAlam 
  },
  { 
    id: 8, 
    name: 'Mohammad Muniruzzaman', 
    designation: 'Director', 
    img: muniruzzaman 
  },
  { 
    id: 9, 
    name: 'Sumon Chandra Shaha', 
    designation: 'Director', 
    img: sumonShaha 
  },
  { 
    id: 10, 
    name: 'Md. Azizur Rahman Mamun', 
    designation: 'Director', 
    img: placeholder
  },
  { 
    id: 11, 
    name: 'Most. Sanjida Akter', 
    designation: 'Director', 
    img: sanjidaAkter 
  }
];

function About() {
  return (
    <div className="relative w-full bg-gradient-to-r from-[#FDF1E2] via-[#F9F1E3] to-[#E3D29C]">
      {/* Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#FDF1E2] via-[#F9F1E3] to-[#E3D29C] mix-blend-soft-light opacity-50"></div>
      <div className="absolute inset-0 pointer-events-none noise-overlay z-10"></div>

      {/* Hero Image and Text */}
      <img src={aboutbg} className="w-full h-auto" alt="About background" />
      <div className="px-16 pt-12">
        <p className='md:text-[4vw] md:pl-[15%] md:text-left text-[8vw] text-center font-josefin font-light text-[#4E3B2C]'>We Design your Hope Fulfilling your Taste</p>
        <h2 className="md:text-[3vw] mt-8 text-[5vw] font-josefin font-light text-[#4E3B2C]">About Us</h2>
        <p className='text-lg pt-[1vh] font-martel'>Upholding the business ethics first, Nipun Developer (Pvt.) Limited, started its glorious journey in 2016 to build quality apartments within an affordable range using quality building materials. Regarding the span of time you may consider us new but our experienced and efficient management having been associated with other companies has successfully completed and handed over a good number of projects for the last ten years. Now ‘Nipun Developer’ has already been a widely accepted name in the real estate sector.
                We believe in professionalism and our focus is there. So we have experienced and reputed technical team and well organized managerial body for constant supervision at every level of construction work. We know it does not matter what we say but it matters what we do. So our client will speak for us as they find us dependable. We hope to go forward in the days to come adopting new ideas and technologies that are being developed in this field every day.
                In our architectural design we comply the environmental issues strictly and do our best to preserve our natural surroundings. Natural light and fresh air are the factors of comfortability. So we design every apartment well ventilated to let in sufficient light and air. You will have the reflection of that here in our work which will make us different from others.</p>
      </div>

      {/* Board of Directors Section */}
      <section className="px-8 py-16">
        <h3 className="md:text-[3vw] mb-8 text-center text-[8vw] font-josefin font-light text-[#4E3B2C]">Board of Directors</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {directors.map(dir => (
            <div key={dir.id} className="bg-white bg-opacity-70 backdrop-blur-md rounded-2xl shadow-lg p-6 flex flex-col items-center text-center">
              <img
                src={dir.img}
                alt={dir.name}
                className="w-32 h-32 rounded-full object-cover border-4 border-white mb-4"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = placeholder;
                }}
              />
              <h4 className="font-semibold text-lg font-josefin text-[#4E3B2C]">{dir.name}</h4>
              <p className="mt-2 text-sm uppercase tracking-wide">{dir.designation}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default About