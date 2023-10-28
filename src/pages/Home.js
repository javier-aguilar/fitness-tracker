import React from 'react'
import { Box, Grid } from '@mui/material';
import Nutrition from '../components/Nutrition'

function Home() {
  return (
    <Grid container spacing={2} justifyContent="center">
        <Grid item xs={4}>
            <Box>
                <Nutrition/>
            </Box>
        </Grid>
    </Grid>
  )
}

export default Home