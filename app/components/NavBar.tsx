'use client';

import React from 'react'
import ThemeSwitcher from './ThemeSwitcher';

const NavBar = () => {
  return (
    <div className="navbar shadow-lg rounded-xl p-2 mb-10 hover:bg-accent">
        <div className='navbar-start'></div>

        <div className="navbar-center ">
            <button className='btn btn-ghost rounded-2xl'>
                Morticia Your Medieval Companion
            </button>
        </div>
        
        <div className='navbar-end'> <ThemeSwitcher/></div>
    </div>
  )
}

export default NavBar