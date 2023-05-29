import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
// import group1 from '../Img/Offic';

const Admcode = () => {
   
    const navigate = useNavigate();

    const [auth, setAuth] = useState({
        user: "",
        password: ""
      });
    
      
    const handleLogin = async event => {
        event.preventDefault();
    
        try {

            const { user, password } = auth;
            const response = await axios.get(`http://localhost:9002/api/admin?user=${user}&&password=${password}`);
            const data = response.data;
          
          // Check if any element in the response data has a matching code
          const matchingElement = data.find(item => item.user === user && item.password === password);
    
          if (matchingElement) {
            console.log('Success');
             navigate(`../admlog/create?user=${user}&&password=${password}`);
          } else {
            console.log('Code does not match');
          }
        } catch (error) {
          console.error('Error fetching code:', error);
        }
      };
    
      const handleChange = event => {
        const { name, value } = event.target;

          setAuth((prevState) => ({
            ...prevState,
            [name]: value
          }));
        
      };
    
      const { user, password } = auth; // Destructuring user and password from auth state
        return (
            
                
            <div
            className="relative flex flex-col justify-center min-h-screen overflow-hidden"
            style={{
              backgroundImage: "url(https://static.vecteezy.com/system/resources/previews/005/425/419/original/3d-render-office-design-modern-meeting-room-mockup-with-black-and-white-concept-free-photo.jpg)",
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          >
            
                
                
                <div className="w-full p-6 m-auto bg-[#F8F8F8] bg-opacity-50 rounded-md shadow-md lg:max-w-xl">
                    <h1 className="text-3xl font-semibold text-center text-black ">
                       Log in
                    </h1>
                    <form className="mt-6">
                        <div className="mb-2">
                            <label
                                htmlFor="user"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Admin ID
                            </label>
                            <input
                                type="text"
                                id="user"
                                name="user"
                                value={user}
                                onChange={ handleChange }
                                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>
                        <div className="mb-2">
                            <label
                                htmlFor="password"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={password}
                                
                                onChange={ handleChange }
                                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>
                       
                        <div className="mt-6">
                            <button onClick={ handleLogin} className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-orange-800 rounded-md hover:bg-orange-700 focus:outline-none focus:bg-yellow-600">
                                Login
                            </button>
                        </div>
                    </form>
    
                  
                </div>
            </div>
          
        );
    }

  


export default Admcode