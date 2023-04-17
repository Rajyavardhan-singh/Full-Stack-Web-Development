
import { Typography } from '@mui/material'
import React from 'react'

export const MuiTypography = () => {
  return (
    <>
    <Typography variant='h1'>H1 Heading</Typography>
    <Typography variant='h2'>H2 Heading</Typography>
    <Typography variant='h3'>H3 Heading</Typography>
    <Typography variant='h4'  component='h1' gutterBottom>H4 Heading</Typography>
    <Typography variant='h5'>H5 Heading</Typography>
    <Typography variant='h6'>H6 Heading</Typography> 

    {/* Two more variants of H6 tags are subtitle one and two */}
    <Typography variant='subtitle1'>Sub title 1</Typography>
    <Typography variant='subtitle2'>Sub title 2</Typography>

    {/* two more variants for paragraph tag */}
    <Typography variant='body1'>Body 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit officia, illo aliquam sapiente deleniti maxime vel enim necessitatibus aperiam commodi minus adipisci molestiae officiis delectus repudiandae expedita non? Impedit, itaque.</Typography>
    <Typography variant='body2'>Body 2 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod nemo similique impedit eveniet enim vel cupiditate consequatur cum! Saepe quia consequatur inventore impedit nulla eligendi nam non neque, natus necessitatibus?</Typography>

    </>
  )
}
