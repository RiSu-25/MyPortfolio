import React from 'react';
import { FaGithub, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import { MdMail } from 'react-icons/md';

const Footer = () => {
  return (
    <div className='mt-20'>
      <div className='text-center'>
        <img src="/logo.png" alt="Logo" className='w-36 mb-2 mx-auto' />

        <div className='w-max flex items-center gap-2 mx-auto'>
            <MdMail /> eagerrishita@gmail.com
        </div>
      </div>

      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p>Designed By &copy; {new Date().getFullYear()} Rishita Sarkar.</p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
            <li>
                <a href="https://github.com/RiSu-25" target='_blank'>
                    <FaGithub size={25} />
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/rishita-sarkar-25su0596/" target='_blank'>
                    <FaLinkedinIn size={25} />
                </a>
            </li>
            <li>
                <a href="https://x.com/rishukar25" target='_blank'>
                    <FaXTwitter size={25} />
                </a>
            </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
