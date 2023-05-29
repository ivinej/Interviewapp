import React from 'react'
import { Link } from 'react-router-dom'

const Testsuc = () => {
  return (


<section class="h-screen">
  <div class="h-full">

    <div
      class="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
      <div
        class="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
        <img
          src="https://cdn.dribbble.com/users/791530/screenshots/6827794/clip-illustration-style-icons8.png"
          class="w-full"
          alt="Sample image" />
      </div>

      <div class="mb-12  md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">

        <h1 className='text-3xl text-black mb-4'>
            Congrats Test Created
        </h1>
        <p className='text-blue-900 '>Your test has been created succesfully . Congrats!!</p>
         <Link to="../../../">
            <button class="bg-blue-500 mt-6 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> Home
  
            </button> 
        </Link>
      </div>
    </div>
  </div>
</section>

  )}

export default Testsuc;