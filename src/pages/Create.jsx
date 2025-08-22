import React, { useEffect, useState } from 'react'
import useFetch from '../hooks/useFetch'
import { useNavigate } from 'react-router-dom';
import useTheme from '../hooks/useTheme';

export default function Create() {

  let [title, setTitle] = useState('');
  let [description, setDescription] = useState('');
  let [newCategory, setNewCategory] = useState('');
  let [categories, setCategories] = useState([]);

  
  let { setPostData, data: book } = useFetch("http://localhost:3000/books", "POST")
  const navigate = useNavigate();

  let addCategory = () => {
    if(newCategory && categories.includes(newCategory)){
      setNewCategory("")
      return;
    }
    setCategories(prev => [...prev, newCategory])
    setNewCategory('')
  }

  let addBook = (e) => {
    e.preventDefault()

    let bookData ={
      title,
      description,
      categories
    }
    setPostData(bookData)
  }

  useEffect(() => {
    if (book) {
      navigate('/', { replace: true });
    }
  }, [book, navigate]);

  let {isDark} = useTheme()

  return (
    <form className='w-150 mx-auto' onSubmit={(e) => e.preventDefault()}>
      <div className="space-y-12">

        <div className="pb-10">

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

            <div className="col-span-full">
              <label htmlFor="street-address" className={`block text-sm/6 font-medium ${isDark ? `text-white`: `text-black`}`}>
                Book Title
              </label>
              <div className="mt-2">
                <input onChange={(e) => setTitle(e.target.value)} value={title} id="street-address" type="text" name="street-address" autoComplete="street-address" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="street-address" className={`block text-sm/6 font-medium ${isDark ? `text-white`: `text-black`}`}>
                Book Description
              </label>
              <div className="mt-2">
                <textarea onChange={(e) => setDescription(e.target.value)} value={description} id="street-address" type="text" name="street-address" autoComplete="street-address" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="street-address" className={`block text-sm/6 font-mediu ${isDark ? `text-white`: `text-black`}`}>Category </label>

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
        <button type="button" onClick={addBook} className="rounded-md bg-indigo-600 px-3 py-2 cursor-pointer font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-full">
          Create
        </button>
      </div>

    </form>


  )
}
