import * as React from 'react';
import Box from '@mui/material/Box';
import { Container } from '@mui/system';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function AddTarget() {
    const paperStyle={padding:'10px 20px', margin:"20px auto"}
    const[elevatorId, setElevatorId]=React.useState('')
    const[target, setTarget]=React.useState('')

    const clickAdd=(e)=>{
        e.preventDefault()
        fetch("http://localhost:8080/elevator/addTarget/".concat(elevatorId),{
            method:"PUT",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(target)
        }).then(()=>{
            window.location.reload()
        })
    }

  return (
    <Box sx={{'& > :not(style)': { m: 1, mx: 'auto' }}}>
      <Container>
        <Paper elevation={3} style={paperStyle}>
          <h1>Add Target</h1>
          <div>
            <TextField id="outlined-basic" label="Elevator Id" variant="outlined" fullWidth 
            value={elevatorId}
            onChange={(e)=>setElevatorId(e.target.value)}
            />
            <TextField id="outlined-basic" label="Floor number" variant="outlined" fullWidth 
            value={target}
            onChange={(e)=>setTarget(e.target.value)}
            />
            <Button variant="contained" color="secondary" onClick={clickAdd}>Add Target</Button>     
          </div>
        </Paper>
      </Container>
    </Box>
  );
}