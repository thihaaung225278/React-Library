import React from 'react'
import book from '../assets/book.jpg' 
import HeroSection from '../components/HeroSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-3">
        {[1,2,3,4, 5].map(() => (
          <div className='p-3 shadow-lg border'>
            <img src={book} alt="" />
            <div className='text-center my-2'>
              <h3 className='font-bold text-lg'>Book Title</h3>
              <p>Book Description....</p>
              {/* categories */}
              <div className='flex flex-wrap my-3'>
                {
                  ["adventure", "fantasy", "travel-book", "media-book"].map( category => (
                    <span className='py-1 px-2 my-1 mx-1 rounded-full bg-blue-200 color-white text-sm'>
                      {category}
                    </span>
                  ))
                }
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
