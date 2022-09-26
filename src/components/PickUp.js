import * as React from 'react';
import Box from '@mui/material/Box';
import { Container } from '@mui/system';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function PickUp() {
    const paperStyle={padding:'10px 20px', margin:"20px auto"}
    const[floor, setFloor]=React.useState('')

    const clickUp=(e)=>{
        e.preventDefault()
        fetch("http://localhost:8080/elevator/pickUp",{
            method:"PUT",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({"floor": floor, "direction": 1})
        }).then(()=>{
            window.location.reload()
        })
    }

    const clickDown=(e)=>{
        e.preventDefault()
        fetch("http://localhost:8080/elevator/pickUp",{
            method:"PUT",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({"floor": floor, "direction": -1})
        }).then(()=>{
            window.location.reload()
        })
    }

  return (
    <Box
    component="form"
    sx={{
      '& > :not(style)': { m: 1, mx: 'auto' },
    }}
    noValidate
    autoComplete="off"
  >
  <Container>
      <Paper elevation={3} style={paperStyle}>
        <h1 style={{color:"blue"}}><u>Pick Me Up</u></h1>
        <div className='rowC'>
            <TextField id="outlined-basic" label="Floor number" variant="outlined" fullWidth 
            value={floor}
            onChange={(e)=>setFloor(e.target.value)}
            />
            <div>
                <Button variant="contained" color="secondary" onClick={clickUp}>Up</Button>
                <Button variant="contained" color="secondary" onClick={clickDown}>Down</Button>
            </div>      
        </div>
      </Paper>
  </Container>
  </Box>
  );
}