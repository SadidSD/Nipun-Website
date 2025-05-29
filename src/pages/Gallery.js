import React, { useState } from 'react';

// Import all gallery images
import aShahriarTower from '../gallary/A- SHAHRIAR TOWER FINAL-25 MARCH.jpg';
import aEntrance from '../gallary/A.ENTRANCE APPROVED- HD Nipun City.jpg';
import bShahriarTower from '../gallary/B- SHAHRIAR TOWER FINAL-25 MARCH.jpg';
import bPerspective from '../gallary/B.PERSPECTIVE APPROVED- HD Nipun City.jpg';
import cShahriarTower from '../gallary/C- SHAHRIAR TOWER FINAL-25 MARCH.jpg';
import cElevation from '../gallary/C.ELEVATION APPROVED- HD Nipun City.jpg';
import dShahriarTower from '../gallary/D- SHAHRIAR TOWER FINAL-25 MARCH.jpg';
import gateView from '../gallary/gate view copy.jpg';
import img1 from '../gallary/IMG-20220403-WA0000.jpg';
import img2 from '../gallary/IMG-20220403-WA0002.jpg';
import img3 from '../gallary/IMG-20220403-WA0003.jpg';
import img4 from '../gallary/IMG-20220403-WA0004.jpg';
import novPrintC from '../gallary/NOV-NOT print-C.jpg';
import novPrintD from '../gallary/NOV-NOT print-D.jpg';

const photos = [
  aShahriarTower,
  aEntrance,
  bShahriarTower,
  bPerspective,
  cShahriarTower,
  cElevation,
  dShahriarTower,
  gateView,
  img1,
  img2,
  img3,
  img4,
  novPrintC,
  novPrintD
];

function Gallery() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-r from-[#FDF1E2] via-[#F9F1E3] to-[#E3D29C]">
      {/* blend + noise */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#FDF1E2] via-[#F9F1E3] to-[#E3D29C] mix-blend-soft-light opacity-50" />
      <div className="absolute inset-0 pointer-events-none noise-overlay z-10" />

      <div className="relative z-20 max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-[4vw]  mb-12 text-center font-josefin font-light text-[#4E3B2C]">Gallery</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {photos.map((src, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-2xl shadow-lg bg-white bg-opacity-30 backdrop-blur-md transform hover:scale-105 transition cursor-pointer"
              onClick={() => setSelected(src)}
            >
              <img
                src={src}
                alt={`Gallery Image ${idx + 1}`}
                className="w-full h-48 object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selected && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelected(null)}
        >
          <img 
            src={selected} 
            alt="Enlarged" 
            className="max-h-full max-w-full rounded-xl" 
          />
        </div>
      )}
    </div>
  );
}

export default Gallery;