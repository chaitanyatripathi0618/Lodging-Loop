import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import moment from "moment";
import logo from "../../Assets/logo.png";
import DashNavboard from './DashNavbar';
import "../dashboard/booking.css"

function Booking() {
  const { id, fromDate, toDate } = useParams();
  const payment = useNavigate();

  const [place, setPlace] = useState(null);
  const [room, setRoom] = useState(null);
  const firstdate = moment(fromDate, 'DD-MM-YYYY');
  const lastdate = moment(toDate, 'DD-MM-YYYY');
  const totalDays = moment.duration(lastdate.diff(firstdate)).asDays()+1; // Get the total number of days between fromDate and toDate

  useEffect(() => {
    axios.get(`http://localhost:4000/upload/${id}`)
      .then(response => {
        setPlace(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [id]);

  useEffect(() => {
    axios.get("http://localhost:4000/rooms")
      .then(response => {
        if (response.data.length > 0) {
          setRoom(response.data[0]);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  if (!place || !room) {
    return null;
  }

  const base64String = btoa(
    new Uint8Array(place.img.data.data).reduce(
      (data, byte) => data + String.fromCharCode(byte),
      ""
    )
  );

  const totalAmount = place.price * totalDays; // Calculate the total amount to be paid
  const bookRoom = () => {
    payment('/payment')
  };

  return (
    <div className='out1'>
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
      <h1 id="booking">Booking Confirmation</h1>
      <div className='hoteldiv1'>
 
        <div className='outerhotelb'>
          <div className='detailsb'>
          <p>Hotel Name:{place.name}</p>
           <p>Location: {place.location}</p>
           <p>From Date: {fromDate} </p>
        <p>To Date: {toDate}</p>
        <p>Price: {place.price}</p>
        <p>Total Days: {totalDays}</p> {/* Display the total number of days */}
        <p>Total Amount to be paid: {totalAmount}</p>
        <p>Note: If you want to pay when you come its</p><p> also fine just contact +91 7890653864</p>

          </div>
          <div id="hotelbim">
            <img src={`data:image/jpg;base64,${base64String}`} alt='hotel' onError={(e) => console.log(e)} />
          </div>

        </div>
         {/* Display the total amount */}
        <button onClick={bookRoom} id="paybtn">Pay Now</button>
      </div>
    </div>
  );
}

export default Booking;
