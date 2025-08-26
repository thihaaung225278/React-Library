import React, { useEffect, useState } from 'react'
import Book from '../components/Book'
import useFetch from '../hooks/useFetch'
import { createSearchParams, useLocation } from 'react-router-dom'
import { db } from '../firebase';
import { collection, getDocs, query } from 'firebase/firestore';


export default function BookList() {

    let location = useLocation();
    let params = new URLSearchParams(location.search);
    let search = params.get('q')

    // let { data: books, loading, error } = useFetch(`http://localhost:3000/books${search ? `?q=${search}` : ""}`);

    let [books, setBooks] = useState([])
    let [error, setError] = useState('')
    let [loading, setLoading] = useState(false)

    // fetch data from firebase
    useEffect(function () {
        setLoading(true)
        let ref = collection(db, 'books')
        let q = query(ref, query('date', 'desc'))
        getDocs(q)
            .then(docs => {
                if (docs.empty) {
                    setError('No books found')
                    setLoading(false)
                } else {
                    let books = []
                    docs.forEach(doc => {
                        let book = { id: doc.id, ...doc.data() }
                        books.push(book)
                    })
                    setBooks(books)
                    setLoading(false)
                    setError('')
                }

            })

    }, [])

    if (error) {
        return <p>{error}</p>
    }

    return (
        <>
            {loading && <p>Loading...</p>}
            {!!books && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-3">
                    {books.map((book) => (

                        <Book book={book} key={book.id} />

                    ))}
                </div>
            )}
            {!!books && !books.length && <p className="text-center text-xl text-gray-500">No books found</p>}

        </>
    )
}
