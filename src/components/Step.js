import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function Step() {
    const clickStep=(e)=>{
        e.preventDefault()
        fetch("http://localhost:8080/elevator/step",{
            method:"PUT",
        }).then(()=>{
            window.location.reload()
        })
    }

  return (
    <Box
    sx={{
      '& > :not(style)': { m: 1, mx: 'auto' },
    }}
    noValidate
    autoComplete="off"
  >
    <Button variant="contained" color="secondary" onClick={clickStep}>Step</Button>
  </Box>
  );
}