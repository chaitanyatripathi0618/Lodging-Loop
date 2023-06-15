import './App.css';
import React from 'react';
import Navbar from './Component/Navbar';
import Views from '././Component/views/Views';
import Video from '././Component/Video/Video';
import Features from './Component/features/Features';
import Footer from './Component/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='bg'>
      <Video/>
      <Navbar/>
      <Views/>
      <Features/>
      <Footer/> 
    </div>
  );
}

export default App;
