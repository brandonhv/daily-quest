import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './navBar/NavBar';
import SideBar from './sideBar/SideBar';
import MainContent from './mainContent/MainContent';
import './styles/App.css'; 

const App = () => {
  return (
    <BrowserRouter>

      <div className="app-container">

        <header className='navbar'>
          <NavBar /> 
        </header>

        <aside className='sidebar'>
          <SideBar /> 
        </aside>

        <main className="main-content">
          <MainContent /> 
        </main>
          
      </div>

    </BrowserRouter>
  );
}

export default App;







// // import React, {useEffect, useState} from "react";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// import Home from "./pages/Home"
// import Archive from "./sideBar/Archive"
// import Projects from "./sideBar/Projects"
// import Scheduale from "./sideBar/Scheduale"
// import TimeClock from "./sideBar/TimeClock"

// import Sidebar from "./sideBar/SideBar"


// function App () {

//   return (
//     <BrowserRouter>
//       <div className="app-container">
//         <NavBar /> {/* Include the NavBar */}
//         <div className="main-content">
//           <SideBar /> {/* Include the Sidebar */}
//           <MainContent /> {/* Include the MainContent */}
//         </div>
//       </div>
//     </BrowserRouter>
//   );
// }


// export default App;



// <BrowserRouter>
// <Sidebar/> 
//   <Routes>
    
//       <Route index element={<Home />} />
//       <Route path="/archive" element={<Archive />} />
//       <Route path="/projects" element={<Projects />} />
//       <Route path="/scheduale" element={<Scheduale />} />
//       <Route path="/timeclock" element={<TimeClock />} />
//       <Route path="*" element={<Navigate to="/" replace/>}/>
//   </Routes>
// </BrowserRouter>