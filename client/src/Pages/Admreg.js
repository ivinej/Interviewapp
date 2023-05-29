import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Admreg = () => {

    // const navigate = useNavigate();

    const [user, setUser] = useState({
        name: "",
        email: "",
        college:"",
        phone:""
      });


      const navigate = useNavigate();         

        const handleChange = (e) => {
            const { name, value } = e.target;

            setUser((prevState) => ({
                ...prevState,
                [name]: value
            }));
            }
       

        const handleSubmit = (e) => {
            e.preventDefault();

        const code = new URLSearchParams(window.location.search).get('code');

                  // Check if any required fields are empty
                  if (!user.name || !user.email || !user.college || !user.phone) {
                    alert("Please fill in all the details");
                    return;
                  }
          
            // Combine the code, name, and email in the user object
              const userData = {
                ...user,
                code: code
              };

      // Make a POST request to the backend
    axios
   
    .post("http://localhost:9002/api/user", userData)
    .then((response) => {
      // Handle success response
      console.log("User creds created:", response.data);
      console.log(response.data._id)
      const userId = response.data._id;
      navigate(`../userhome?code=${code}&userId=${userId}`);
   
    })
    .catch((error) => {
      // Handle error response
      console.error("Error creating question:", error);
    });
};

        const { name, email,college, phone, code } = user;

  return (
    <div className="h-screen md:flex">
	<div
		className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-900 to-purple-700 i justify-around items-center hidden">
		<div>
            

			<h1 className="text-white font-bold text-4xl font-sans">Welcome</h1>
			<p className="text-white mt-1">Please enter your Full name, Email Address, College and Phone number  to continue</p>

		</div>
		<div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		<div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		<div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		<div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
	</div>
	<div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
		<form onSubmit={ handleSubmit } className="bg-white">
        <img className="mb-10 max-w-xs " src='https://www.cyberark.com/wp-content/uploads/2022/06/erasmith2712x520.png'/>
	

			<div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
				<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
					fill="currentColor">
					
				</svg>
				<input className="pl-2 outline-none border-none" type="text" onChange={ handleChange} name="name"  id="name" value={ name } placeholder="Full name" />
      </div>

      
				
					<div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none"
							viewBox="0 0 24 24" stroke="currentColor">
						
						</svg>
						<input className="pl-2 outline-none border-none" type="text" onChange={ handleChange} name="email" id="email" value={ email } placeholder="Email Address" />
      </div>

      <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none"
							viewBox="0 0 24 24" stroke="currentColor">
							
						</svg>
						<input className="pl-2 outline-none border-none" type="text" onChange={ handleChange} name="college" id="college" value={ college } placeholder="College name" />
      </div>

      <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none"
							viewBox="0 0 24 24" stroke="currentColor">
							
						</svg>
						<input className="pl-2 outline-none border-none" type="tel" onChange={ handleChange} name="phone" id="phone" value={ phone } placeholder="Phone number" />
      </div>
						
							{/* <button type="submit" className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Continue</button>
							 */}
                {/* Only enable the button when all required fields are filled */}
          <button
            type="submit"
            className={`block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2 ${
              !name || !email || !college || !phone ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={!name || !email || !college || !phone}
          >
            Continue
          </button>
		</form>
	</div>
</div>
  )
}

export default Admreg