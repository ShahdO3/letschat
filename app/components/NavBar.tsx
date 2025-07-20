'use client';

import React from 'react'

const NavBar = () => {
  return (
    <div className="navbar bg-base-300 shadow-lg rounded-xl p-2 mb-10 hover:bg-black">
        <div className='navbar-start'></div>

        <div className="navbar-center ">
            <button className='btn btn-ghost rounded-2xl'>
                Welcome to Let's Chat
            </button>
        </div>
        
        <div className='navbar-end'></div>
    </div>
  )
}

export default NavBar