import React, { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import './style.css'

import NavBar from '../../components/Navbar'
import useTheme from '../../hooks/useTheme'


export default function Layout() {

  let {isDark} = useTheme()

  useEffect(() => {
    let body = document.body
    if(isDark){
      body.classList.add("bg-black")
    }else{
      body.classList.remove("bg-black")
    }
  }, [isDark])

  return (
    <>
      <NavBar />

      {/* dynamic page data */}
      <div className={isDark ? `bg-black h-screen` : `bg-white h-screen`}>
        <div className='max-w-6xl mx-auto animate-fade-in'>
          <Outlet />
        </div>
      </div>
    </>
  )
}
