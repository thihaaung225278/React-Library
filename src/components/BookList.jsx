import React from 'react'
import Book from '../components/Book'
import useFetch from '../hooks/useFetch'

export default function BookList() {

    let {data: books, loading, error} = useFetch('http://localhost:3000/books');

    if(error){
        return <p>{error}</p>
    }

    return (
        <>
            {loading && <p>Loading...</p>}
            {!!books && (
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-3">
                    {books.map((book) => (
                        <Book book={book} key={book.id}  />
                    ))}
                </div>
            )}
            
        </>
    )
}
