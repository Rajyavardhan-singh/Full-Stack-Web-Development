
import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import Cards from './Cards'

export const CardComponent = () => {
  return (
    <Box   m={4} sx={{
        backgroundColor:'#eeeeee',
        // backgroundRepeat:'no-repeat',
        // backgroundSize:'cover',
        padding:"20px",
        display:'flex',
        justifyContent:'space-evenly',
        flexWrap:'wrap',
        borderRadius:'10px'
    }}>
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />

    </Box>
  )
}
