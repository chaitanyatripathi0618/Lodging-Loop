import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './Component/dashboard/Dashboard';
import Hotel from './Component/dashboard/Hotels/Hotel';
import Holiday from './Component/dashboard/holidays/Holiday';
import DashNavboard from './Component/dashboard/DashNavbar';
import Booking from './Component/dashboard/Booking';
import Home from './Component/dashboard/Home';
import Payment from './Component/dashboard/Payment';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
                <Route path='/' element={<App/>} />
                <Route path='/dashboard' element={<DashNavboard/>} />
                <Route exact path="/booking/:id/:fromDate/:toDate" element={<Booking/>}/>
                <Route path='/payment'element={<Payment/>}/>
                <Route path='/holiday'element={<Holiday/>}/>
                <Route path='/dashboard/:id' element={<Hotel/>}/>


      </Routes>         
      </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
