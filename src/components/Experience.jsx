import React from 'react';
import { FaLaptopCode } from 'react-icons/fa6';
import { LuExternalLink } from 'react-icons/lu';
import { PiCertificateFill } from 'react-icons/pi';

const experienceData = [
  {
    icon: <FaLaptopCode className='text-pink-800 w-12 h-12' />,
    title: 'ReactJS Developer Intern',
    company: 'Talentrise Technokrtae Pvt.Ltd. || Nagpur',
    description: 'Built dynamic UI with React.js & Tailwind CSS, transformed Figma designs into pixel-perfect components, utilized Git/GitHub, and enhanced frontend skills.',
    year: 'March 2025 - June 2025'
  },
  {
    icon: <FaLaptopCode className='text-pink-800 w-12 h-12' />,
    title: 'Web Developer Intern',
    company: 'MSG Solution || Siliguri',
    description: 'Built responsive dashboards and webpages with HTML, CSS, and JavaScript while collaborating remotely during COVID-19 lockdown to gain practical frontend development experience.',
    year: 'Aug 2020 - Oct 2020'
  },
];

const certificateData = [
  {
    icon: <PiCertificateFill className='text-orange-500 w-12 h-12' />,
    title: 'Web Designing & Development',
    company: 'Oasis Infobyte',
    link: '/certificate/Oasis.pdf',
  },
  {
    icon: <PiCertificateFill className='text-orange-500 w-12 h-12' />,
    title: 'Frontend Development',
    company: 'Cognifyz Technologies',
    link: '/certificate/Cognifyz.pdf',
  },
]

const Experience = () => {
  return (
    <div id='experience' className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-heading'>EXPERIENCE</h4>
      <h2 className='text-center text-5xl'>Professional Experience</h2>

      <p className='text-center max-w-2xl mx-auto mt-5 mb-12'>
        I have hands-on experience in frontend development, building responsive and user-friendly websites using React.js, Tailwind CSS, and JavaScript.
      </p>

      {/* Experience Section */}
      <h3 className='text-xl font-semibold text-center my-6 text-gray-700 underline decoration-2 underline-offset-4'>Experience</h3>
      <div className='grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-6 my-10 justify-center items-center'>
        {experienceData.map((exp, index) => (
          <div key={index} className='border border-gray-400 bg-white/60 rounded-lg px-8 py-12 hover:shadow-[4px_4px_0_#000] cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500'>
            <div className='w-10'>{exp.icon}</div>
            <h3 className='text-lg my-4 text-gray-700'>{exp.title}</h3>
            <div className="flex justify-between items-center my-2">
              <h4 className="text-sm font-semibold text-gray-700">{exp.company}</h4>
              <h4 className="text-sm font-semibold text-gray-700 italic">{exp.year}</h4>
            </div>
            <p className='text-xs text-gray-600 leading-5'>{exp.description}</p>
          </div>
        ))}
      </div>

      {/* Certificates Section */}
      <h3 className='text-xl font-semibold text-center my-6 text-gray-700 underline decoration-2 underline-offset-4'>Certificates</h3>
      <div className='grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-6 my-10 justify-center items-center'>
        {certificateData.map((certi, index) => (
          <div key={index} className='border border-gray-400 bg-white/60 rounded-lg px-8 py-12 hover:shadow-[4px_4px_0_#000] cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500'>
            <div className='flex items-center gap-4'>
              <div className='w-10'>{certi.icon}</div>
              <a href={certi.link} target='_blank' rel='noopener noreferrer' className='flex items-center gap-1 text-sm text-blue-900 hover:underline'>
                View Certificate <LuExternalLink />
              </a>
            </div>
            <h3 className='text-lg my-4 text-gray-700'>{certi.title}</h3>
            <h4 className='text-sm my-4 text-gray-700'>{certi.company}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
