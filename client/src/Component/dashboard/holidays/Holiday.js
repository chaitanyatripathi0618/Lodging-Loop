import axios from "axios";
import logo from "../../../Assets/logo.png";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DashNavboard from "../DashNavbar";
import { Footer } from "antd/es/layout/layout";
import "../holidays/holiday.css"

function Holiday() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/holiday")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
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
      <div className="outboxh">
        {data.map((e) => {
          const base64String = btoa(
            new Uint8Array(e.img.data.data).reduce(
              (data, byte) => data + String.fromCharCode(byte),
              ""
            )
          );
          return (
            <div className="boxdivh">
              <div className="holidayd">
              <div className="imgboxh">
                <img
                  src={`data:image/jpeg;base64, ${base64String}`}
                  alt="hotel"
                  id="hotelimg"
                />
              </div>
              <div className="textp">
                <h1>{e.place}</h1>
                <p>Price: ₹{e.price} per 2 person</p>
                <p> {e.description}</p>
                <p>Offers/Discount: {e.offers}</p>
              </div>

              </div>

              
            </div>
          );
        })}
      </div>
      <Footer/>
    </div>

  );
}

export default Holiday;

