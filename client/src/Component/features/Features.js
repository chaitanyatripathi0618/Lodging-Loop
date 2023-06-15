import React from "react";
import "./features.css";
// import i3 from "../Assets/pool1.jpg"
import AOS from 'aos';
import {useEffect} from "react";
import 'aos/dist/aos.css';
import view2 from '../../Assets/view2.jpg';
import view3 from '../../Assets/view3.jpg';
import view4 from '../../Assets/view4.jpg';
import view5 from '../../Assets/view5.jpg';

function Features(){
    useEffect(() => {
        AOS.init({duration:2000});
      }, [])
    return(
        <div className="comfortable1">
            <div  className="textbed2">
                <div data-aos="zoom-out" className="quotes">
                    <h2>Felt cute, might stay on this balcony forever</h2>
                </div>
                <div className="divtext">
                    <h2>
                    Your Comfort our priority
                    </h2>
                </div>
            </div>
            <div className="features">
                <div data-aos="zoom-in-left" className="room1">
                    <img id="room"src={view2}/>
                </div>
                 <div data-aos="zoom-in-right" className="room2">
                    <img id="room2"src={view3}/>
                    </div>
                <div data-aos="zoom-in-left" className="room3">
                    <img id="room"src={view4}/>
                    </div>
                <div data-aos="zoom-in-right" className="room4">
                    <img id="room"src={view5}/>
                </div> 
            </div>
            
        </div>
    )

}
export default Features;