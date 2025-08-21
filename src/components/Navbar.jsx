import React, { useContext, useState } from 'react'

import { Link, NavLink, useNavigate } from 'react-router-dom'
import { ThemeContext } from '../contexts/ThemeContext';


export default function Navbar() {

    let [search, setSearch] = useState("");
    let navigate = useNavigate()

    const handleSearch = (e) => {
        navigate(`/?q=${search}`)
    }

    const { theme } = useContext(ThemeContext)

    return (
        <nav className={`border border-b-1 border-b-indigo-600 ${theme == 'dark' ? 'bg-blue-100' : 'bg-yellow-100'}`}>
            <ul className='flex justify-between items-center p-3 max-w-6xl mx-auto'>

                {/* left */}
                <li className='flex items-center gap-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder='Search book ...' className='outline-none' />
                    <button onClick={handleSearch} className='text-white bg-indigo-600 py-2 px-2 text-sm rounded-lg cursor-pointer flex items-center gap-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        {/* <span className='hidden md:block'>Search</span> */}
                    </button>
                </li>

                {/* center */}
                <Link to="/" className='flex items-center gap-3 md:-ml-40'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
                    </svg>
                    <span className='text-2xl font-bold text-indigo-600 hidden md:block'>
                        Book Store
                    </span>
                </Link>

                {/* right */}
                <li className='flex items-center gap-3'>
                    <Link to='/create' className='text-white bg-indigo-600 py-2 px-3 text-sm rounded-lg cursor-pointer flex items-center gap-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <span className='hidden md:block'>Create</span>
                    </Link>
                    <div className='w-11'>
                        <img src="https://placehold.co/100x100" alt="profile" className='w-full rounded-full' />
                    </div>
                </li>

            </ul>
        </nav>
    )
}
