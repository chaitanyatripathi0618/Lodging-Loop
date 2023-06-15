import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import logo from "../../../Assets/logo.png";
import "./hotel.css";
import Room from './Room';
import Lottie from "lottie-react";
import p1 from '../../../Assets/location (1).json'
import Footer from '../../footer/Footer';

function Hotel() {
    const {id} = useParams();
    const [place, setPlace] = useState(null);
    const [room, setRoom] = useState([]);

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
              setRoom(response.data);
            }
          })
          .catch(error => {
            console.log(error);
          });
    }, []);

    if (!place) {
        return null;
    }

    const base64String = btoa(
        new Uint8Array(place.img.data.data).reduce(
            (data, byte) => data + String.fromCharCode(byte),
            ""
        )
    );
    

    return (
        <div className='out'>
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

            <div className='hoteldiv'>
                <h1>{place.name}</h1>
                <div id="animationdiv">
                    <div id="diva">
                    <Lottie id="animationl" animationData={p1} />
                    </div>
                
                <p id="locationn">Location: {place.location}</p>
                </div>
                <div className='outerhotel'>
                    <div id="hotelim">
                        <img src={`data:image/jpg;base64,${base64String}`} alt='hotel' onError={(e) => console.log(e)} />
                    </div>
                    <div className='rightimg'>
                       <Room/>
                                
                    </div>
                </div>
                <p>Price: ₹{place.price}</p>
                <p>{place.description}</p>
                <p>breakfast: {place.breakfast}</p>
                <p>Room Type: {place.roomstype}</p>
            </div>
            <Footer/>
        </div>
    );
}

export default Hotel;
