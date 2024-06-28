import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Navbar() {
  return (
    <header className='flex flex-row justify-between items-center px-20 py-6'>
        <NavLink to="/" className="w-64 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
            <p className='blue-gradient_text text-[28px]'>Trong Tu Le</p>
        </NavLink>
        <nav className='flex text-lg gap-7 font-medium'>
            <NavLink to="/about" className={({isActive}) => isActive ? 'text-blue-500 text-[20px]' : 'text-black text-[20px]'}>
                About
            </NavLink>

            <NavLink to="/projects" className={({isActive}) => isActive ? 'text-blue-500 text-[20px]' : 'text-black text-[20px]'}>
                Projects
            </NavLink>
        </nav>
    </header>
  )
}
