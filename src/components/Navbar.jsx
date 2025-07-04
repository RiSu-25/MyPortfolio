import React, { useEffect, useRef, useState } from 'react';
import { FaDownload } from 'react-icons/fa6';
import { IoClose } from 'react-icons/io5';
import { RiMenu3Line } from 'react-icons/ri';

const Navbar = () => {

    const [isScroll, setIsScroll] = useState(false);

    const sideMenuRef = useRef();

    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }
    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)'
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(scrollY > 50) {
                setIsScroll(true)
            } else {
                setIsScroll(false)
            }
        })
    },[]);

  return (
    <>
        <div className='fixed top-0 right-0 w-11/12 z-[-1]'>
            <img src="/header-bg.png" alt="HeaderBg" className='w-full' />
        </div>
        <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? 'bg-white/50 backdrop-blur-lg shadow-lg' : ''} `}>
            <a href="">
                <img src="/logo.png" alt="logo" className='w-35 cursor-pointer mr-14' />
            </a>
            <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? '' : 'bg-white/50 shadow-lg'} `}>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skill">Skills</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#project">Projects</a></li>
                <li><a href="#contact">Contact me</a></li>
            </ul>

            <div className='flex items-center gap-4'>
                <a href="Resume.pdf" className='hidden sm:flex items-center gap-3 px-8 py-2.5 border border-gray-500 rounded-full ml-4'>
                    Resume <FaDownload />
                </a>
                <button onClick={openMenu} className='block md:hidden ml-3'>
                    <RiMenu3Line />
                </button>
            </div>

            {/* mobile menu */}
            <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500'>
                <div className='absolute right-6 top-6'>
                    <IoClose onClick={closeMenu} className='cursor-pointer' />
                </div>
                <li><a href="#home" onClick={closeMenu}>Home</a></li>
                <li><a href="#about" onClick={closeMenu}>About</a></li>
                <li><a href="#skill" onClick={closeMenu}>Skills</a></li>
                <li><a href="#experience" onClick={closeMenu}>Experience</a></li>
                <li><a href="#project" onClick={closeMenu}>Projects</a></li>
                <li><a href="#contact" onClick={closeMenu}>Contact me</a></li>
                <li>
                    <a href="" className='mt-2 inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-full hover:bg-gray-900 transition' onClick={closeMenu}>
                        Resume <FaDownload />
                    </a>
                </li>
            </ul>
        </nav>
    </>
  );
}

export default Navbar;
