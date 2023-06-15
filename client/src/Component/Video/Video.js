import "./video.css"
import vi from "../../Assets/vi.mp4"
import ar from "../../Assets/downarrow.png"
import AOS from 'aos';
import {useEffect} from "react";
import 'aos/dist/aos.css';
function Video(){
    useEffect(() => {
        AOS.init({duration:1000});
      }, [])
    return(
        <div className="video">
            <div className="textl" data-aos="flip-up">
                <p id="p1">Life is all about waiting for the right moment</p>
                <p id="p2">And we are here to make that right moment for you </p>
                <button id="expbtn">Explore More</button>
            </div>
             <video id="video"autoPlay loop muted playsInline>
        <source src={vi} type="video/mp4" />
      </video>
      <div>
        <img src={ar}/>

      </div>

        </div>
    )

}
export default Video
