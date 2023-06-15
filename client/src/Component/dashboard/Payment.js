import Lottie from "lottie-react";
import p1 from '../../Assets/confirm.json'
import logo from "../../Assets/logo.png";
import "../dashboard/booking.css"
import Footer from "../footer/Footer";
function Payment(){
    return(
        <div>
            <div className='outerbox'>
        <div className="logodivs">
          <p id="lodging">Lodging</p>
          <div id="name">
            <p>l</p>
            <div id="logodiv">
              <img src={logo} id="logo" alt="Logo" />
            </div>
            <p>P</p>
          </div>
        </div>
      </div>
      <div className="animationc">
      <Lottie id="animationc" animationData={p1} />
      </div>
      <Footer/>
            
        </div>
    )

}
export default Payment