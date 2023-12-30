// import React from "react";
// import '../Pages/CSS/LoginSignup.css'

// const LoginSignup = () => {
//   return (
//     <div className="loginsignup">
//       <div className="loginsignup-container">
//         <h1>Sign Up</h1>
//         <div className="loginsignup-fields">
//           <input type="text" placeholder="Your Name" />
//           <input type="email" placeholder="Email Address" />
//           <input type="password" placeholder="Password" />
//         </div>
//         <button>SignUp</button>
//         <p className="loginsignup-login">
//           Already have an Account <span>Login here</span></p>

//         <div className="loginsignup-agree">
//           <input type="checkbox" name="" id="" />
//           <p>By continuing, i agree to the terms of use & privacy policy.</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginSignup;

import React, { useState } from "react";
import "../Pages/CSS/LoginSignup.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginSignup = () => {
const navigate = useNavigate();

  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const { username, email, password, confirmpassword } = data;
  const changeHandler = (e) => {



    setData({ ...data, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
   

    if (username.trim() !== '' && email.trim() !== '' && password.trim() !== '' && password === confirmpassword) {
      // Perform authentication logic here
      axios
        .post("https://shoopy-f2159-default-rtdb.firebaseio.com/registered.json", data)
        .then(() =>  {
          alert("Signed up successfully!");
          navigate('/');
        } )
        .catch((error) => alert("Error signing up. Please try again."));
        
    } else {
      alert("Please fill in all fields correctly.");
    }
  };
  return (
    <form onSubmit={submitHandler} className="loginsignup">
      <div className="loginsignup-container">
        <div className="loginsignup-fields">
          <input
            type="text"
            placeholder="your name"
            name="username"
            value={username}
            onChange={changeHandler}
          />
          <input
            type="email"
            placeholder="Enter Your Email"
            name="email"
            value={email}
            onChange={changeHandler}
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            value={password}
            onChange={changeHandler}
          />
          <input
            type="password"
            placeholder="confirm password"
            name="confirmpassword"
            value={confirmpassword}
            onChange={changeHandler}
          />
        </div>
        <button type="submit">SignUp </button>
      </div>
    </form>
  );
};

export default LoginSignup;
