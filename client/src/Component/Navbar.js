import logo from "../Assets/logo.png"
import "./navbar.css"
import { useState,useEffect } from 'react';
import LoginForm from "../Component/Form.js"

import React from "react"
function Navbar(){
    const [openModel,setOpenModel]= useState(false)
    return(
        <div>
            <div className="header">
            <div className="logo">
                <img src={logo}/>
            </div>

            <div className="list">
                <li> Home</li>
                <li>Connect Us</li>
                <button  className="loginbtn" onClick={()=>{
                    setOpenModel(true)
                    }}>Login
                </button>

            </div>

            
        </div>
        {openModel&& <LoginForm closeModel={setOpenModel} />}

        </div>
        
    )
}
export default Navbar;