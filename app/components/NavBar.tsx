'use client';

import React from 'react'
import ThemeSwitcher from './ThemeSwitcher';

const NavBar = () => {
  return (
    <div className="flex navbar shadow-lg rounded-xl p-2 hover:bg-neutral">
        <div className='navbar-start'></div>

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