import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function Appbar() {

  const reset=(e)=>{
    e.preventDefault()
    fetch("http://localhost:8080/elevator/reset",{
      method:"DELETE",
      headers:{"Content-Type":"application/json"},
    }).then(()=>{
      window.location.reload()
    })
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Elevator Application
          </Typography>
          <Button color="inherit" onClick={reset}>Reset</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
