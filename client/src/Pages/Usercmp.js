import React  from 'react'
import { Link } from 'react-router-dom'

import axios from 'axios';
import { useEffect } from 'react';
const Usercmp = () => {



   
    

    useEffect(() => {
        // Make a PUT request to update the document
        const updateDocument = async () => {
           
            const userId = new URLSearchParams(window.location.search).get('userId');
            const marks = new URLSearchParams(window.location.search).get('obtainedMarks');
            const total = new URLSearchParams(window.location.search).get('totalMarks');
            const score = `${marks}/${total}`;
          const url = `http://localhost:9002/api/userdisp?userId=${userId}`;
          const newData = { score };
    
          try {
            const response = await axios.put(url, newData);
            console.log('Document updated successfully:', response.data);
          } catch (error) {
            console.error('Error updating document:', error);
          }
        };
    
        updateDocument();
      }, []);

  return (
    <section class="h-screen">
    <div class="h-full">
  
      <div
        class="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
        <div
          class="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
          <img
            src="https://images.creativemarket.com/0.1.0/ps/7457313/3005/2001/m1/fpnw/wm0/people-v17-01-.jpg?1576237306&s=2a25da4fdc30bcb8c05f5888d65a97ba"
            class="w-full"
            alt="Sample image" />
        </div>
  
        <div class="mb-12  md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
  
          <h1 className='text-3xl text-black mb-4'>
              Congrats you completed the test!!
          </h1>
          <p className='text-blue-900 '>Your score has been saved successfully . </p>
           <Link to="../../userlog">
              <button class="bg-blue-500 mt-6 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> Home
    
              </button> 
          </Link>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Usercmp