import React from 'react';
import { Stack , TextField ,InputAdornment} from '@mui/material';

export const TextFields = () => {
  return (
    <>
    <Stack spacing={4}>
        <Stack spacing={2} direction='row' >
            <TextField variant='filled'label='Name'/>
            <TextField variant='outlined' label='Password' helperText="Dont't share your password with anyone" type='password' />
            <TextField variant='standard'label="Gender"/>
        </Stack>
        <Stack spacing={2} direction='row'>
            <TextField label='Required' color='error' required ></TextField>
            <TextField label='Disabled' color='primary' disabled ></TextField>
            <TextField label='small secondary' color='secondary' ></TextField>
            <TextField label='read only and error' error InputProps={{readOnly:true}} ></TextField>

        </Stack>
        <Stack spacing={2} direction='row'>
            <TextField label='Weight' InputProps={{endAdornment:<InputAdornment position='end'>Kg</InputAdornment>}} ></TextField>
            <TextField label='Amount' InputProps={{startAdornment:<InputAdornment position='start'>$</InputAdornment>}} ></TextField>

        </Stack>


    </Stack>
    </>
  )
}
