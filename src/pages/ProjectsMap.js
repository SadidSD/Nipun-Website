/* global google */
import React, { useEffect, useRef, useState, useCallback } from 'react';
import { LoadScript } from '@react-google-maps/api';
import { cleanMapStyle } from './MapStyle';
import projects from './data'; // Adjust the path if needed

const containerStyle = { width: '100%', height: '70vh' };
const libraries = ['maps'];

// Only minimal location data needed for marker placement and title
const projectLocations = [
  { id: 1, title: 'Nipun City', lat: 23.848160, lng: 90.265679 },
  { id: 2, title: 'Nipun Shwapnonir', lat: 23.848873, lng: 90.256205 },
  { id: 3, title: 'Nipun Shariar Tower', lat: 23.836319, lng: 90.251339 },
];

export default function ProjectsMap() {
  const mapRef = useRef(null);
  const [activeInfo, setActiveInfo] = useState(null);
  const markersRef = useRef([]);

  const onLoad = useCallback(map => {
    mapRef.current = map;
    map.setOptions({ styles: cleanMapStyle });

    const bounds = new window.google.maps.LatLngBounds();
    projectLocations.forEach(loc => {
      const marker = new window.google.maps.Marker({
        position: { lat: loc.lat, lng: loc.lng },
        map,
        title: loc.title
      });
      marker.addListener('click', () => setActiveInfo(loc));
      markersRef.current.push(marker);
      bounds.extend(marker.position);
    });
    map.fitBounds(bounds);
  }, []);

  const zoomIn = () => mapRef.current?.setZoom(mapRef.current.getZoom() + 1);
  const zoomOut = () => mapRef.current?.setZoom(mapRef.current.getZoom() - 1);

  const activeProject = projects.find(p => p.title === activeInfo?.title);

  return (
    <div className="relative bg-[#6B4F32]/10 rounded-lg">
      <LoadScript
        googleMapsApiKey="AIzaSyD-0lc1t9xU4q50S63PQiYFHsaxfF9vYxc"
        libraries={libraries}
        version="weekly"
      >
        <GoogleMap onLoad={onLoad} />
      </LoadScript>

      {activeInfo && activeProject && (
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
          <div className="bg-[#6B4F32] text-[#FAEDCD] px-6 py-4 rounded-2xl shadow-xl w-[85vw] max-w-sm text-center animate-fadeInScale">
            <a href={activeProject.link} className="block">
              <img
                src={activeProject.image}
                alt={activeInfo.title}
                className="rounded-xl mb-3 w-full h-40 object-cover"
              />
              <h3 className="font-semibold text-xl mb-1">{activeInfo.title}</h3>
              <p className="text-sm opacity-90">{activeProject.location}</p>
            </a>
            <button
              className="mt-4 text-sm underline hover:text-white transition"
              onClick={() => setActiveInfo(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div className="absolute right-4 bottom-4 flex flex-col space-y-2 z-20">
        <button onClick={zoomIn} className="bg-[#4A3221] text-white rounded-full w-10 h-10 flex items-center justify-center shadow hover:opacity-90">＋</button>
        <button onClick={zoomOut} className="bg-[#4A3221] text-white rounded-full w-10 h-10 flex items-center justify-center shadow hover:opacity-90">－</button>
      </div>
    </div>
  );
}

function GoogleMap({ onLoad }) {
  const ref = useRef(null);
  const mapInstance = useRef(null);

  useEffect(() => {
    if (ref.current && window.google && !mapInstance.current) {
      mapInstance.current = new window.google.maps.Map(ref.current, {
        disableDefaultUI: true,
        scrollwheel: false,
        styles: cleanMapStyle
      });
      onLoad(mapInstance.current);
    }
  }, [onLoad]);

  return <div ref={ref} style={containerStyle} />;
}
