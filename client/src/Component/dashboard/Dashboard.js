import DashNavboard from "./DashNavbar";
import axios from "axios";
import React, { useState, useEffect } from "react";
import "./dashboard.css";
import Footer from "../footer/Footer";
import im4 from "../../Assets/bob.png";
import { Link } from "react-router-dom";
import "antd/dist/reset.css";
import moment from "moment";
import { DatePicker } from "antd";
import Hotel from "./Hotels/Hotel";
const { RangePicker } = DatePicker;

function Dashboard() {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [hotel, setHotel] = useState([]);
  const [fromDate, setFromDate] = useState();
  const [toDate, setToDate] = useState();
  const [showHotel, setShowHotel] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:4000/upload")
      .then((res) => {
        setData(res.data);
        setHotel(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const getInputValue = (inputValue) => {
    let updatedHotel = [...hotel];
    updatedHotel = updatedHotel.filter((curHotel) => {
      return curHotel.description
        .toLowerCase()
        .includes(inputValue.toLowerCase());
    });
    setData(updatedHotel);
  };
  const filterByDate = (dates) => {
    setFromDate((dates[0]).format("DD-MM-YYYY"));
    setToDate((dates[1]).format("DD-MM-YYYY"));
  };

  // const url = `/dashboard?fromDate=${fromDate}&toDate=${toDate}`;

  return (
    <div>
      <div id="calendar">
        <RangePicker
          format="DD-MM-YYYY"
          onChange={filterByDate}
          showTime={false}
        />
      </div>
      {/* <h1>Dashboard</h1> */}
      <div className="outbox">
        {data.map((e) => {
          const base64String = btoa(
            new Uint8Array(e.img.data.data).reduce(
              (data, byte) => data + String.fromCharCode(byte),
              ""
            )
          );
          return (
            <div className="boxdiv" key={e._id}>
              <div className="imgbox">
                <Link to={`/dashboard/${e._id}`} key={e._id}>
                  <img
                    src={`data:image/jpeg;base64, ${base64String}`}
                    alt="hotel"
                    id="hotelimg"
                  />
                </Link>
              </div>
              <div className="textp">
                <h1>{e.name}</h1>
                <hr id="hrid" />
                <p id="price">Price: ₹{e.price}</p>
                <p>Breakfast: {e.breakfast}</p>
                <div className="ftbtn">
              <Link to={`/booking/${e._id}/${fromDate}/${toDate}`}>
                <button id="morebtn">Book Now</button>
              </Link>
              <Link to={`/dashboard/${e._id}`} key={e._id}>
                <button id="morebtn">More Details</button>
              </Link>
              </div>
              </div>
              
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;
