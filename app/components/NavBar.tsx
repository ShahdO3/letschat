'use client';

import React from 'react'
import ThemeSwitcher from './ThemeSwitcher';
import border from "../public/medeivalBorder.png"
import Image from 'next/image';

// Background image = bg-[url('/medeivalBorder3.png')]

const NavBar = () => {
  return (
    <div className="flex navbarshadow-lg rounded-xl p-2 bg-neutral hover:bg-base-300">
   
        <Image 
          src="/medeivalBorder3.png" 
          alt='border'
          className="opacity-25"
          fill/>
          
      <div className='navbar-start'>
      </div>
      <div className="navbar-center ">
        <button className='btn btn-ghost btn-neutral rounded-2xl text-neutral-content'>
            Morticia Your Medieval Companion
        </button>
      </div>
        
      <div className='navbar-end'> <ThemeSwitcher/></div>
    </div>
  )
}

export default NavBar