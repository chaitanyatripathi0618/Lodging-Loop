import React from "react";
import "./views.css";
// import i3 from "../Assets/pool1.jpg"
import AOS from 'aos';
import {useEffect} from "react";
import 'aos/dist/aos.css';
import room from '../../Assets/bed1.jpg';
import room1 from '../../Assets/room1.jpg';
import room2 from '../../Assets/view1.jpg';
import room3 from '../../Assets/room3.jpg';

function View(){
    useEffect(() => {
        AOS.init();
      }, [])
    return(
        <div className="comfortable">
            <div className="rooms">
                <div data-aos="zoom-in-left" className="room1">
                    <img id="room"src={room}/>
                </div>
                 <div data-aos="zoom-in-right" className="room2">
                    <img id="room2"src={room1}/>
                    </div>
                <div data-aos="zoom-in-left" className="room3">
                    <img id="room"src={room2}/>
                    </div>
                <div data-aos="zoom-in-right" className="room4">
                    <img id="room"src={room3}/>
                </div> 
            </div>
            <div  className="textbed">
                <div data-aos="zoom-out" className="quotes">
                    <h2>When you get into a hotel room, you lock the door, and you know there is a secrecy, there is a luxury, there is fantasy. There is comfort. There is reassurance.</h2>
                </div>
                <div className="divtext">
                    <h2>
                    Your Comfort our priority
                    </h2>
                </div>

            </div>
            
        </div>
    )

}
export default View;