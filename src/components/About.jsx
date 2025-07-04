import React from 'react';
import { FaUserGraduate } from "react-icons/fa6";
import { FiExternalLink } from 'react-icons/fi';

const infoList = [
  {
    icon: <FaUserGraduate />,
    title: "MCA",
    description: "Master of Computer Application",
    percent: "72.13",
    certificate: "/certificate/MCADegree.pdf",
  },
  {
    icon: <FaUserGraduate />,
    title: "BSc(CS)",
    description: "Bachelor of Science in CS",
    percent: "67.00",
    certificate: "/certificate/BScDegree.pdf",
  },
];

const About = () => {
  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-heading'>INTRODUCTION</h4>
      <h2 className='text-center text-5xl'>About Me</h2>
  
      <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
        <div className='w-80 sm:95 rounded-3xl max-w-none'>
            <video src="/about.mp4" autoPlay muted loop playsInline className='w-full rounded-3xl'></video>
        </div>

        <div className='flex-1'>
            <p className='mb-10 max-w-2xl'>
                I’m a frontend developer with a strong focus on ReactJS. I enjoy building responsive, user-friendly websites that look great and work well on all devices.
                I have experience working with modern tools like Tailwind CSS, JavaScript, and Git, and I’m always eager to learn and improve.
                My goal is to create clean, efficient code and bring ideas to life through functional and visually appealing web interfaces.
            </p>

            <h2 className='text-lg font-semibold mb-3'>Education Details</h2>
            <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl'>
                {infoList.map((item, index) => (
                    <li key={index} className='border-[0.5px] border-gray-400 bg-white/60 rounded-xl p-6 cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000]'>
                        <div className='text-4xl mb-4'>{item.icon}</div>
                        <div>
                            <h3 className='my-4 font-semibold text-gray-700'>{item.title}</h3>
                            <p className='text-gray-600 text-sm'>{item.description}</p>
                            <span className='text-xs'>Percentage {item.percent}%</span>
                            <a href={item.certificate} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-900 text-sm font-medium hover:underline">
                              <FiExternalLink className="mr-1" />
                                View Certificate
                             </a>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
