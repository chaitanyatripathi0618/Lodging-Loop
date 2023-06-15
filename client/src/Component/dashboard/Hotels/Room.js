import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import logo from "../../../Assets/logo.png";
import { Buffer } from 'buffer';
import "./hotel.css";

function Room() {
  const [room, setRoom] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:4000/rooms")
      .then(response => {
        setRoom(response.data);
        setError(null);
      })
      .catch(error => {
        console.log(error);
        setError(error.message);
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  } else if (!room) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        {room.map((e) => {
          return (
            <div className="roomdiv" key={e._id}>
              {e.img && <img src={`data:${e.img.contentType};base64,${Buffer.from(e.img.data).toString('base64')}`} alt="room" />}
            </div>
            
          );
        })}
      </div>
    );
  }
}

export default Room;
