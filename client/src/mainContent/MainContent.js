import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/Home';
import Archive from './pages/Archive';
import Projects from './pages/Projects';
import Scheduale from './pages/Scheduale';
import TimeClock from './pages/TimeClock';


const MainContent = () => {
  return (

      <Routes>
        <Route index element={<Home />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/scheduale" element={<Scheduale />} />
        <Route path="/timeclock" element={<TimeClock />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
  );
}

export default MainContent;