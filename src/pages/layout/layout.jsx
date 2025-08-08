import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import './style.css'

import NavBar from '../../components/Navbar'

export default function Layout() {
  return (
    <>
      <NavBar />

      {/* dynamic page data */}
      <div className='max-w-6xl mx-auto p-3 animate-fade-in'>
        <Outlet />
      </div>
    </>
  )
}
