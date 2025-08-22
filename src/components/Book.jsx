import React from 'react'
import bookImg from '../assets/book.jpg'
import { Link } from 'react-router-dom'
import useTheme from '../hooks/useTheme'

export default function Book({ book }) {

    let {isDark} = useTheme()

    return (
        <Link to={`/books/${book.id}`} className={`p-3 shadow-lg border ${isDark ? `bg-gray-800` : `bg-white`}`}>
            <img src={bookImg} alt="" /> 
            <div className='text-center my-2'>
                <h3 className={`font-bold text-lg ${isDark ? `text-white` : `text-black`}`}>{book.title}</h3>
                <p className={`${isDark ? `text-white` : `text-black`}`}>{book.description.length > 50 ? book.description.substring(0, 50) + '...' : book.description}</p>
                {/* categories */}
                <div className='flex flex-wrap my-3'>
                    {
                        book.categories.map(category => (
                            <span key={category} className='py-1 px-2 my-1 mx-1 rounded-full bg-blue-200 color-white text-sm'>
                                {category}
                            </span>
                        ))
                    }
                </div>
            </div>
        </Link>
    )
}
