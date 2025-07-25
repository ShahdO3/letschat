'use client';

import React from 'react'
import ThemeSwitcher from './ThemeSwitcher';
import border from "../public/medeivalBorder.png"
import Image from 'next/image';

// Background image = bg-[url('/medeivalBorder3.png')]

const NavBar = () => {
  return (
    <nav className="flex navbar shadow-lg rounded-xl 
      p-2 bg-neutral hover:bg-base-300">
   
        <Image 
          src="/medeivalBorder3.png" 
          alt='border'
          className="bg-repeat opacity-25"
          fill/>
          
      <div className='navbar-start'>
      </div>
      <div className="navbar-center ">
        <button className='rounded-2xl text-neutral-content flicker-text'>
            Morticia Your Medieval Companion
        </button>
      </div>
        
      <div className='navbar-end'> <ThemeSwitcher/></div>
    </nav>
  )
}

export default NavBar