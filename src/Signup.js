import { useRef } from "react";
import { useState } from "react";
import {useNavigate} from 'react-router-dom';
import {signup, login, useAuth, logout} from "./firebase"

function Signup() {

  const [loading, setLoading] = useState(false); //by default signup button will be enabled no loading
  const currentUser = useAuth() //get the current user details
  const emailRef = useRef(); //to get user email id 
  const passwordRef = useRef(); // to get user password
  const navigate = useNavigate();

  async function handleSignup(){ //async because it is an api call
    try{
      setLoading(true); //while user is getting registered disable signup button
      
      await signup(emailRef.current.value,passwordRef.current.value); //sending email id and password as promise
      navigate("/dashboard");
    }
    catch{
      alert("Error! ")
    }
    setLoading(false)
  }

//   async function handleLogin(){ //async because it is an api call
//     try{
//       setLoading(true); //while user is getting registered disable signup button
      
//       await login(emailRef.current.value,passwordRef.current.value); //sending email id and password as promise
//     }
//     catch{
//       alert("Error! ")
//     }
//     setLoading(false)
    
//   }

  async function handleLogout(){
    setLoading(true);
    try{
      await logout()
    } catch{
      alert("error!");
    }
    setLoading(false);
  }
  return(
    <div>
    <form>
        <input  ref={emailRef}type="email" placeholder="email" />
        <input ref={passwordRef} type="password" placeholder="password" />
        <input></input>
    </form>
    <button  onClick={handleSignup}>Sign up</button>
    {/* <button disabled={loading || currentUser!=null} onClick={handleLogin}>Log in</button> */}
    <button disabled={loading || !currentUser} onClick={handleLogout}>Log Out</button>
    </div>  
  )
}

export default Signup