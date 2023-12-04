// Logout.js
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';


// const Logout = () => {

//   const access=sessionStorage.getItem('access')
  
//   const redirect = useNavigate()
//   const handleLogout = async () => {
//     try {
//       const response = await fetch('http://127.0.0.1:8000/logout/', {
//         method: 'POST',  // or 'GET' depending on your Django configuration
//         credentials: 'include',  // Include credentials (cookies) in the request
//         headers : {'Authorization':'Bearer'+' '+ access}
//       });
//       sessionStorage.clear()
//       redirect('/')


//       if (response.ok) {
//         console.log('Logout successful');
//         // You can perform additional actions after successful logout, such as redirecting to the login page.
//       } else {
//         console.error('Logout failed');
//       }
//     } catch (error) {
//       console.error('Error during logout:', error);
//     }
//   };

//   return (
//     <button onClick={handleLogout}>Logout</button>
//   );
// };

// export default Logout;
