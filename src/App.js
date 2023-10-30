import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Nutrition from './pages/Nutrition';
import Activity from './pages/Activity';

export const App = () => {
  return (
    <div className='dashboard'>
    <CssBaseline />
        <Navbar />
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/nutrition" element={<Nutrition/>}/>
            <Route path="/activity" element={<Activity/>}/>
        </Routes>
    </div>
  )
}

export default App