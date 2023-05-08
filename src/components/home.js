import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../css/home.css"
import { NavBar } from './NavBar'
export const Home = () => {
  const navigate=useNavigate()
  const view=()=>{
    navigate('/getplane')
  }
  return (
    <div>
      <NavBar/>
      <div className='containe'>
    <img src="https://c4.wallpaperflare.com/wallpaper/105/484/965/towards-the-sunset-white-airplane-wallpaper-preview.jpg"></img>
    <div className="text-overlay">
    <p className='s-heading'>Use Code <b>FLYHIGH</b> for Flat 10% Discount</p>
    <button  onClick={view} className="home-but"> View Flights!!</button>
    </div>
    </div>   
    </div>
  );
}
