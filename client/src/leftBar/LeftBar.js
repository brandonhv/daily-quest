import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/App.css"



const SideBar = () => {
  return (
    
        <ul className="all-buttoms">
            {/* <li><Link to="/" className="side-buttoms">😊</Link></li> */}
            <li><Link to="/archive" className="side-buttoms">😐</Link></li>
            <li><Link to="/projects" className="side-buttoms">🧐</Link></li>
            <li><Link to="/scheduale" className="side-buttoms">😢</Link></li>
            <li><Link to="/timeclock" className="side-buttoms">🥱</Link></li>
        </ul>
  
  );
}

export default SideBar;