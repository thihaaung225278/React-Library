import React from 'react'
import bookImg from '../assets/book.jpg'
import { Link } from 'react-router-dom'

export default function Book({ book }) {
    return (
        <Link to={`/books/${book.id}`} className='p-3 shadow-lg border'>
            <img src={bookImg} alt="" /> 
            <div className='text-center my-2'>
                <h3 className='font-bold text-lg'>{book.title}</h3>
                <p>{book.description.length > 50 ? book.description.substring(0, 50) + '...' : book.description}</p>
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
