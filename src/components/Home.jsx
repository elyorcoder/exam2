import React from 'react'
import "../App.css";
import { Outlet } from 'react-router-dom'
import Navbar from "./Navbar";
import Sitebar from './Sitebar';

const Home = () => {
  return (
    <div className="d1">
      <Sitebar />
      <div className="d2">
        <Navbar />
        <div className="d3">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Home