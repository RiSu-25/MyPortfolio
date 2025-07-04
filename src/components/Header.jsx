import React from 'react';
import { MdArrowOutward, MdDownload } from 'react-icons/md';

const Header = () => {
  return (
    <div id='home' className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
      <div>
        <img src="/profile.png" alt="ProfileImg" className='rounded-full w-40' />
      </div>
      <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3'>
        Hi! I'm Rishita Sarkar <img src="/hand-icon.png" alt="HandWave" className='w-6' />
      </h3>
      <h1 className='font-semibold text-2xl sm:text-3xl lg:text-[35px]'>
        Frontend Web Developer | ReactJS Developer
      </h1>
      <p className='max-w-2xl mx-auto'>
        I'm a Frontend Web Developer specialized in React.js, skilled in building and maintaining responsive, high-performance websites.
      </p>
      <div className='flex flex-row sm:flow-col items-center gap-4 mt-4'>
        <a href="#contact" className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2'>
            Contact Me <MdArrowOutward />
        </a>
        <a href="/Resume.pdf" className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'>
            My Resume <MdDownload />
        </a>
      </div>
    </div>
  );
}

export default Header;
