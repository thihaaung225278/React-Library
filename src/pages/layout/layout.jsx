import React from 'react'
import { Outlet, NavLink, Link } from 'react-router-dom'

import NavBar from '../../components/Navbar'


export default function layout() {
  return (
    <>
      <NavBar />
      
      {/* dynamic page data */}
      <div className='max-w-6xl mx-auto p-3'>
        <Outlet />
      </div>

    </>
  )
}
