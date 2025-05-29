import React from 'react';
import careerbg from '../images/careerbg.png';

const positions = [
  // {
  //   id: 1,
  //   title: 'Senior Engineer',
  //   location: 'New York City',
  //   applyLink: '#'
  // },
  // Add more roles here...
];

function Career() {
  return (
    <div className="relative w-full min-h-screen bg-gradient-to-r from-[#FDF1E2] via-[#F9F1E3] to-[#E3D29C]">
      <div className="absolute inset-0 bg-gradient-to-r from-[#FDF1E2] via-[#F9F1E3] to-[#E3D29C] mix-blend-soft-light opacity-50"></div>
      <div className="absolute inset-0 pointer-events-none noise-overlay z-10"></div>

      <img src={careerbg} className="w-full h-auto" alt="Career background" />

      <div className="relative z-20 max-w-4xl mx-auto px-8 py-16">
        <h2 className="font-josefin font-semibold mb-6 text-[8vw] md:text-[3vw] text-[#4E3B2C]">
          Open Positions
        </h2>

        {positions.length > 0 ? (
          <div className="space-y-8">
            {positions.map((role) => (
              <div
                key={role.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between bg-white bg-opacity-70 backdrop-blur-md rounded-2xl p-6"
              >
                <div>
                  <h3 className="text-xl font-titillium font-semibold">{role.title}</h3>
                  <p className="mt-1 text-sm text-gray-600 font-martel">{role.location}</p>
                </div>
                <a
                  href={role.applyLink}
                  className="mt-4 sm:mt-0 inline-block px-6 py-2 bg-[#7A624A] text-white rounded-full hover:bg-opacity-90 transition font-titillium"
                >
                  Submit Application
                </a>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center bg-white bg-opacity-60 backdrop-blur-md rounded-2xl p-12 my-12">
            <h3 className="text-2xl font-titillium font-semibold mb-4">No Current Vacancies</h3>
            <p className="text-center text-gray-700 mb-6 font-martel">
              We are not hiring at this time. However, we welcome speculative applications.
            </p>
          </div>
        )}

        <p className="mt-12 text-center text-lg font-martel">
          Or reach out directly at{' '}
          <a href="mailto:nipundeveloper@gmail.com" className="underline text-[#7A624A]">
            nipundeveloper@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
}

export default Career;
