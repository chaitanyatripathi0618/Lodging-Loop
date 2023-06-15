import "./dashnav.css";
import logo from "../../Assets/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import "antd/dist/reset.css";
import moment from "moment";
import { DatePicker } from "antd";
import Dashboard from "./Dashboard";

const { RangePicker } = DatePicker;

function DashNavboard() {
  const [fromDate, setFromDate] = useState();
  const [toDate, setToDate] = useState();
  const [searchText, setSearchText] = useState("");

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchText(value);
  };

  const filterByDate = (dates) => {
    setFromDate(moment(dates[0]).format("DD-MM-YYYY"));
    setToDate(moment(dates[1]).format("DD-MM-YYYY"));
  };

  return (
    <div>
      <div className="outerbox">
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
        <div className="boxd">
          <div className="listdivs">
            <ul>
              <li>Rooms</li>
              <Link to="/holiday">
                <li>Vacation Plans</li>
              </Link>
              <li>Cabs</li>
              <li>Buses</li>
              <li>Campings</li>
              <Link to="/holiday">
              <li>Hill Stations</li>
              </Link>
            </ul>
          </div>
          <div className="searchbox">
            <p>Book Domestic Property Online</p>
            <div className="item">
              <div id="search">
                <p>City, Property or Trip to..</p>
                <input
                  type="search"
                  placeholder="Destination"
                  value={searchText}
                  onChange={handleInputChange}
                />
                <p>India</p>
              </div>

            </div>
            <div id="btndiv">
              <Link
                to={`/dashboard?searchText=${searchText}&fromDate=${fromDate}&toDate=${toDate}`}
              >
                <button id="searchbtn">Search</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Dashboard/>
    </div>
  );
}

export default DashNavboard;
