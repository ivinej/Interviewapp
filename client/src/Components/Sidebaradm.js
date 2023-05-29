import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Sidebaradm = () => {
  return (
    <div>


<div id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform  sm:translate-x-0 translate-x-0" aria-label="Sidebar">
   <div className="h-full flex flex-col px-3 py-4 overflow-y-auto bg-sky-950 ">
     <a href="https://youtu.be/9bZkp7q19f0" className="flex text-center items-center justify-center p-5  mb-5">
        
        
      </a>
      <ul className=" flex-grow p-2   font-medium">

           <li className=' ml-5  mb-2 '>
            <NavLink to="/admlog/create"  className={({ isActive }) =>             
              isActive ? 'rounded-l-full bg-white text-sm flex h-11 p-3 w-80 hover:text-black' : ' text-gray-100 flex p-3 text-sm font-thin'
              
               }>
               
               <span className="ml-3">Create</span>
            </NavLink>
           </li> 
          
              
         <li className='ml-5 mb-2'>
            <NavLink to="mytest"  className={({ isActive }) =>
               isActive ? 'rounded-l-full bg-white text-sm flex h-11 p-3 w-80 hover:text-black' : 'text-gray-100 flex p-3 text-sm font-thin'
                }>
                     
               <span className="flex-1 ml-3 whitespace-nowrap">My test</span>
            </NavLink>  
            
         </li>
         <li className='ml-5 mb-2'>
            <NavLink to="score"  className={({ isActive }) =>
               isActive ? 'rounded-l-full bg-white text-sm flex h-11 p-3 w-80 hover:text-black' : 'text-gray-100 flex p-3 text-sm font-thin'
                }>
                     
               <span className="flex-1 ml-3 whitespace-nowrap">Score Card</span>
            </NavLink>  
            
         </li>
        

       
        
        
         
      </ul>

      <div className='text-white justify-center mt-auto flex items-center text-xs text-center gap-2'><img className='h-3' />- Admin Dashboard</div>
   </div>
</div>
<Outlet/>
</div>
  )
}

export default Sidebaradm