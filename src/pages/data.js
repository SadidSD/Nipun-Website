import nipuncity from '../images/project-nipun.jpg'
import shwapnonir from '../images/project-shwapnonir.jpg'
import shariar from '../images/project-shariar.jpg'
import nipunbg from '../images/nipunbg.jpg'
import shahriarbg from '../images/shahriarbg.jpg'
import shwapnonirbg from '../images/shwapnonirbg.jpg'

const projects = [
  {
    id:1,
    title: 'Nipun City',
    image: nipuncity,
    background: nipunbg,
    link: '/projects/ProjectNipun',
    location: 'Located on Birulia Road about 500 meters from Savar Bus Stand',
    type: 'completed',
    landArea: '52 DCM',
    height: 'Ground Floor + 09 Living Floor',
    totalFlat: 144,
    totalCarParking: 51,
    specialFeatures: [
      'Located on Savar-Uttara connecting road/Birulia Road.',
      'Biggest ever apartment complex in Savar with individual 4 blocks.',
      'Close to BRAC and Daffodil University campuses.',
      'Nearby mosque, renowned schools & colleges, mega malls, Kacha Bazar, and community facilities.',
      'Open space of 30 feet by 50 feet with flower bed & fountain.',
      'Open space with garden, fountain & aquarium.',
      'Alternative lift for each flat.',
      '24 hours security services.',
      'Well equipped fire fighting systems.',
      '24 hours generator services.',
      'Two water pumps & one generator.'
    ]
  },
  {
    id:2,
    title: 'Nipun Shariar Tower',
    image: shariar,
    background: shahriarbg,
    link: '/projects/ProjectShariar',
    location: 'Located on Ceramic Road (80ft), about 300 meters from Enam Medical College, Savar',
    type: 'ongoing',
    landArea: '14.19 DCM',
    height: 'Ground floor + 9 Living floor',
    totalFlat: 27,
    totalCarParking: 18,
    flatSizes: {
      typeA: '2000 Sqft',
      typeB: '1671 Sqft',
      typeC: '1525 Sqft',
    },
    handover: '31 December 2024',
    specialFeatures: [
      'Only 200 meters Southward from Bangabandhu Chattar (Zero Point of Savar).',
      'Situated along 80 feet & 25 feet wide roads on both the East & South side.',
      'Close to hospitals, community centres, schools, colleges, shopping malls, and Sheikh Rasel Stadium.',
      'Adjacent to a big playground (Central Eidgah/melar maath).',
      'Near a grand mosque.',
      'Bird’s eye view from rooftop with scenic river views.',
      'Alternative lift for each flat.',
      '24 hours security service.',
    ]
  },
  {
    id:3,
    title: 'Nipun Shwapnonir',
    image: shwapnonir,
    background: shwapnonirbg,
    link: '/projects/ProjectShwapnonir',
    location: 'House no-38, WAPDA Road, Malancha, Savar, Dhaka',
    type: 'ongoing',
    landArea: '11.50 DCM',
    height: 'Ground floor + 9 Living floor',
    totalFlat: 36,
    totalCarParking: 13,
    flatSizes: {
      typeA: '1236 Sqft',
      typeB: '1326 Sqft',
      typeC: '1302 Sqft',
      typeD: '1121 Sqft',
    },
    handover: '31 December 2025',
    specialFeatures: [
      '2 minutes walking distance from Savar Bazar bus stand.',
      'Nearby hospitals, shopping malls, kitchen market, schools, and colleges.',
      'Alternative lift option for each flat.',
      '24 hours security service.',
      'Well equipped fire fighting system.',
      'Well ventilated design for fresh air and natural light.',
    ]
  }
]

export default projects
