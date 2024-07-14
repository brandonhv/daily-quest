import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/App.css"


const SideBar = () => {
  return (
    
        <ul className="all-buttoms">
            <li><Link to="/" className="side-buttoms">Home</Link></li>
            <li><Link to="/archive" className="side-buttoms">Archive</Link></li>
            <li><Link to="/projects" className="side-buttoms">Projects</Link></li>
            <li><Link to="/scheduale" className="side-buttoms">Scheduale</Link></li>
            <li><Link to="/timeclock" className="side-buttoms">TimeClock</Link></li>
        </ul>
  
  );
}

export default SideBar;