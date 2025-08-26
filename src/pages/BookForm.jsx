import React, { useEffect, useState } from 'react'
// import useFetch from '../hooks/useFetch'
import { useNavigate, useParams, Link } from 'react-router-dom';
import useTheme from '../hooks/useTheme';
import { addDoc, collection, serverTimestamp, doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase'

export default function Create() {

  let { id } = useParams();

  let [title, setTitle] = useState('');
  let [description, setDescription] = useState('');
  let [newCategory, setNewCategory] = useState('');
  let [categories, setCategories] = useState([]);
  let [isEdit, setIsEdit] = useState(false)

  // let { setPostData, data: book } = useFetch("http://localhost:3000/books", "POST")
  const navigate = useNavigate();

  let addCategory = () => {
    if (newCategory && categories.includes(newCategory)) {
      setNewCategory("")
      return;
    }
    setCategories(prev => [...prev, newCategory])
    setNewCategory('')
  }

  let submitForm = (e) => {
    e.preventDefault()

    let bookData = {
      title,
      description,
      categories,
      date: serverTimestamp()
    }

    if (isEdit) {
      let ref = doc(db, 'books', id)
      updateDoc(ref, bookData)
        .then(() => {
          navigate('/')
        })

    } else {
      let ref = collection(db, 'books')
      addDoc(ref, bookData)
        .then(() => {
          navigate('/')
        })
    }
  }
  
  useEffect(function () {
    if (id) {
      setIsEdit(true)
      let ref = doc(db, 'books', id)
      getDoc(ref)
        .then(b => {
          if (b.exists) {
            let { title, description, categories } = b.data();
            setTitle(title)
            setDescription(description)
            setCategories(categories)
          }
        })
    } else {
      setIsEdit(false)
      setTitle('')
      setDescription('')
      setCategories([])
    }
  }, [id])

  let { isDark } = useTheme()

  return (
    <>
      <Link to="/">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`size-6 my-5 ${isDark ? `text-white` : `text-black`}`}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75 14.25 12m0 0 2.25 2.25M14.25 12l2.25-2.25M14.25 12 12 14.25m-2.58 4.92-6.374-6.375a1.125 1.125 0 0 1 0-1.59L9.42 4.83c.21-.211.497-.33.795-.33H19.5a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25h-9.284c-.298 0-.585-.119-.795-.33Z" />
        </svg>
      </Link>

      <hr className={`${isDark ? `border-white` : `border-black`}`} />

      <form className='w-150 mx-auto' onSubmit={(e) => e.preventDefault()}>
        <div className="space-y-12">

          <div className="pb-10">

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

              <div className="col-span-full">
                <label htmlFor="street-address" className={`block text-sm/6 font-medium ${isDark ? `text-white` : `text-black`}`}>
                  Book Title
                </label>
                <div className="mt-2">
                  <input onChange={(e) => setTitle(e.target.value)} value={title} id="street-address" type="text" name="street-address" autoComplete="street-address" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                </div>
              </div>

              <div className="col-span-full">
                <label htmlFor="street-address" className={`block text-sm/6 font-medium ${isDark ? `text-white` : `text-black`}`}>
                  Book Description
                </label>
                <div className="mt-2">
                  <textarea onChange={(e) => setDescription(e.target.value)} value={description} id="street-address" type="text" name="street-address" autoComplete="street-address" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                </div>
              </div>

              <div className="col-span-full">
                <label htmlFor="street-address" className={`block text-sm/6 font-mediu ${isDark ? `text-white` : `text-black`}`}>Category </label>

                <div className="mt-2 flex items-center gap-x-3">
                  <input onChange={(e => setNewCategory(e.target.value))} value={newCategory} id="street-address" type="text" name="street-address" autoComplete="street-address" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                  <svg onClick={addCategory} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 bg-indigo-600 text-white p-1 w-10 h-10 rounded-md cursor-pointer hover:bg-indigo-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </div>

                <div className="my-5 flex flex-wrap">
                  {categories.map((b, index) => (
                    <span key={index} className='py-1 px-5 my-1 mx-1 rounded-full bg-indigo-500 text-white'>{b}</span>
                  ))}
                </div>

              </div>

            </div>
          </div>

        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button type="button" onClick={submitForm} className="rounded-md bg-indigo-600 px-3 py-2 cursor-pointer font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-full flex gap-2 justify-center items-center">
            {
              isEdit
                ?

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                </svg>

                :

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>

            }

            {isEdit ? 'Edit Book' : 'Create Book'}
          </button>
        </div>

      </form>
    </>
  )
}
