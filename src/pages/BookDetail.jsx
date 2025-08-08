import React from 'react'
import useFetch from '../hooks/useFetch'
import { Link, useParams } from 'react-router-dom';
import bookImage from '../assets/book.jpg'

export default function BookDetail() {

    let params = useParams()
    console.log(params.id)

    let {data: book, loading, error} = useFetch(`http://localhost:3000/books/${params.id}`);
    
    if(error){
        return <p>{error}</p>
    }

    return (
        <>
            {loading && <p>Loading...</p>}
            {!!book && (
                <>
                <Link to='/' className='flex justify-start cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75 14.25 12m0 0 2.25 2.25M14.25 12l2.25-2.25M14.25 12 12 14.25m-2.58 4.92-6.374-6.375a1.125 1.125 0 0 1 0-1.59L9.42 4.83c.21-.211.497-.33.795-.33H19.5a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25h-9.284c-.298 0-.585-.119-.795-.33Z" />
                    </svg>
                </Link>
                <hr className='my-5' />
                <h1 className='font-bold text-3xl my-5'>{book.title}</h1>
                <div className='grid md:grid-cols-2 gap-10'>
                    <div>
                        <img src={bookImage} alt="" className='w-[100%]' />
                    </div>
                    <div className='space-y-3'>
                        <div>
                            {book.categories.map(b => (
                                <span className='py-1 px-2 my-1 mx-1 rounded-full bg-blue-200 color-white text-sm'>{b}</span>
                            ))}
                        </div>
                        <p>{book.description}</p>
                    </div>
                </div>
                </>
            )}
        </>
    )
}
