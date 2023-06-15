import React from "react";
import "./form.css";
import i3 from "../Assets/pool1.jpg"
import AOS from 'aos';
import {useEffect} from "react";
import 'aos/dist/aos.css';
import Login from "./Login";
import SignUp from "./Signup";


function LoginForm({ closeModel }) {

  useEffect(() => {
    AOS.init();
  }, [])


  return (
    <div className="popup-box">
      <div className="box">
        <div data-aos="fade-right" className="imgdiv">
            <img id="add1"  src={i3}/>
            <div className="textdiv">
              <h1>Sign Up now to get</h1>
              <br/>
              <p className="pt">To join the hand of </p><p id="happy">10 crore Happy Customers</p>
              <hr/>
              <h3 className="off">Upto 25% off </h3>
              <p className="offp">On the Domestic Hotels</p>
              <hr/>
              <h3 className="offh">Zero Convenince Fees</h3>
              <p className="offp">In booking before hand</p>

            </div>

        </div>
        <div data-aos="fade-left" className="formbox">
          <button id="closebtn"
            onClick={() => {
              closeModel(false);
            }}
          >
            X
          </button>
          <Login/>
        </div>
      </div>
    </div>
  );
}
export default LoginForm;
