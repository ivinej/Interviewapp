import React from 'react'

import Card from '../Components/Card'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
  
      
<section class="bg-cover bg-no-repeat bg-[url('https://www.vertexplus.com/global/en/images/productive.jpg')] bg-gray-700 bg-blend-multiply">
    <div class="px-4 mx-auto max-w-screen-xl flex flex-col justify-center items-center text-center py-24 lg:py-56">
        
        <img className='h-20 mb-2  ' src='https://www.cyberark.com/wp-content/uploads/2022/06/erasmith2712x520.png'/>
        <p class="mb-9 text-lg font-normal text-gray-300 lg:text-lg sm:px-16 lg:px-48">Our motto is “every day is a great day” and we try to spread the same positivity everywhere and in everything that we do. We are a GREAT PLACE TO WORK certified company and work on the new age technology.</p>
        <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            
        <div className='flex w-full justify-center gap-20 px-10 lg:flex-row mx-auto flex-col '>
         <Link to='/admcode'> 

       <div className=''>
                   <Card
                  
                   title="Admin" 
                   button="Continue as Admin" />
          </div>
           </Link> 
          <Link to='/userlog'> 
          <div className=''>
                  <Card
                   
                   title="User"
                   button="Continue as User" /> 
          </div>  
          </Link>         
        
        </div>
        </div>
    </div>
</section>


  )
}

export default Login