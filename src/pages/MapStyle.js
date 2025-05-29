export const cleanMapStyle = [
  {
    featureType: 'landscape',
    elementType: 'geometry.fill',
    stylers: [{ color: '#F5EBDD' }]
  },
  {
    featureType: 'water',
    elementType: 'geometry.fill',
    stylers: [{ color: '#D1C4B2' }]
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [{ color: '#C4A484' }, { lightness: -20 }]
  },
  {
    featureType: 'road.arterial',
    elementType: 'geometry',
    stylers: [{ color: '#D6BFA3' }]
  },
  {
    featureType: 'administrative',
    elementType: 'geometry',
    stylers: [{ visibility: 'off' }]
  },
  {
    featureType: 'poi',
    elementType: 'all',
    stylers: [{ visibility: 'off' }]
  },
  {
    featureType: 'transit',
    elementType: 'all',
    stylers: [{ visibility: 'off' }]
  },
  {
    featureType: 'all',
    elementType: 'labels.text.fill',
    stylers: [{ visibility: 'on' }, { color: '#000000' }, { lightness: 0 }]
  }
];
