import React from "react"
import "./login.css";
import { useState } from "react"
import Login from "./Login";
function SignUp(){
    const [login,setLogin]=useState(false)
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [phone,setPhone]=useState("")
    const [password,setPassword]=useState("")

    async function registerUser(e){
      e.preventDefault()
      const response= await fetch("http://localhost:4000/api/register",{
      method:'POST'  ,
      headers:{

          'Content-Type':'application/json',

        },
         body:JSON.stringify({
          name,
          email,
          password,
          phone,
        })
      })
      const data=await response.json()
      console.log(data)

    }

    return(
        <div>
            <div className="title">
            <h1>SignUp User</h1>
          </div>
          <form onSubmit={registerUser}>
          <div className="body">
            <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} required/><span>Name</span>
            <input type="email"  value={email} onChange={(e)=>{setEmail(e.target.value)}} required/><span>Email</span>
            <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} required/><span>Password</span>
            <input type="number" value={phone} onChange={(e)=>{setPhone(e.target.value)}} required/><span>Phone Number</span>
          </div>
          <div className="footer">
            <input type="submit" value="Create Account" id="createbtn"/>
            {/* <button id="newbtn">New Login</button> */}
          </div>
          </form>
          {/* {login && <Login/>} */}
        </div>
    )

}
export default SignUp;