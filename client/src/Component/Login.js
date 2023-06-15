import React from "react"
import "./login.css";
import { useState } from "react"
import SignUp from "./Signup";
import { useNavigate } from "react-router-dom";



function Login({Logg}){

  const home = useNavigate();

  const[isShowRegister,setIsShowRegister]=useState(false)

  const [phone,setPhone]=useState("")
    const [password,setPassword]=useState("")
  const showRegister=()=>{
    setIsShowRegister(true)
  }
    
    
    
    async function loginUser(e){
      e.preventDefault()
      const response= await fetch("http://localhost:4000/api/login",{
      method:'POST'  ,
      headers:{

          'Content-Type':'application/json',

        },
         body:JSON.stringify({
          phone,
          password,
        })
      })
      const data=await response.json()
      if(data.token){
        home("/dashboard");
      }
      else{
        alert('no successfull login')
      }
      console.log(data)


    }
    return(
        <div >
          {
            isShowRegister ? (<SignUp/>):(
              <div>
              <div className="title">
            <h1>Hi user</h1>
          </div>
          <form onSubmit={loginUser}>

          
          <div className="body">
            <input type="number" value={phone} onChange={(e)=>{setPhone(e.target.value)}} required /><span>Phone Number</span>
            <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} required/><span>Password</span>
          </div>
          <div className="footer">
            <input type="submit" value="Login" id="loginbtn"/>
          </div>
          </form>
          <button id="newbtn" onClick={showRegister}>New Login</button>

          </div> 

          )}
          
          
                  
        </div>
    )

}
export default Login