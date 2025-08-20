import React from 'react'
import Book from '../components/Book'
import useFetch from '../hooks/useFetch'
import { createSearchParams, useLocation } from 'react-router-dom'

export default function BookList() {

    let location = useLocation();
    let params = new URLSearchParams(location.search);
    let search = params.get('q')

    let {data: books, loading, error} = useFetch(`http://localhost:3000/books${search ? `?q=${search}` : ""}`);
    console.log(books);


    if(error){
        return <p>{error}</p>
    }

    return (
        <>
            {loading && <p>Loading...</p>}
            {!!books && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-3">
                    {books.map((book) => (
                        <Book book={book} key={book.id}  />
                    ))}
                </div>
            )}
            {!!books && !books.length && <p className="text-center text-xl text-gray-500">No books found</p>}
            
        </>
    )
}
