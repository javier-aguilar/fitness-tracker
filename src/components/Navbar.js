import React from 'react'
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

function Navbar() {
  return (
    <Stack sx={{ background: '#f3f3f3', width: '250px', height: '100vh', p: 3, paddingTop: '55px', alignItems: 'center' }} px="20px">
        <Stack gap = "40px" fontSize = "24px">
            <Link to="/" style={{textDecoration: 'none', color: "#242829"}}>Overview</Link>
            <Link to="/nutrition" style={{textDecoration: 'none', color:'#242829'}}> Nutrition </Link>
            <Link to="/activity" style={{textDecoration: 'none', color:'#242829'}}> Activity </Link>
        </Stack>
    </Stack>
  )
}

export default Navbar