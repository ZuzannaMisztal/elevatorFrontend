import * as React from 'react';
import Box from '@mui/material/Box';
import { Container } from '@mui/system';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Update() {
    const paperStyle={padding:'10px 20px', margin:"20px auto"}
    const[elevatorId, setElevatorId]=React.useState('')
    const[current, setCurrent]=React.useState('')
    const[targets, setTargets]=React.useState('')

    const clickUpdate=(e)=>{
      e.preventDefault()
      console.log(elevatorId)
      console.log(current)
      console.log(targets)
      fetch("http://localhost:8080/elevator/update/".concat(elevatorId),{
          method:"PUT",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify({"current": current, "targets": JSON.parse("["+targets+"]")})
      }).then(()=>{
          window.location.reload()
      })
    }

  return (
    <Box sx={{'& > :not(style)': { m: 1, mx: 'auto' }}}>
      <Container>
        <Paper elevation={3} style={paperStyle}>
          <h1>Update Elevator</h1>
          <div>
            <TextField id="outlined-basic" label="Elevator Id" variant="outlined" fullWidth 
            value={elevatorId}
            onChange={(e)=>setElevatorId(e.target.value)}
            />
            <TextField id="outlined-basic" label="Floor number" variant="outlined" fullWidth 
            value={current}
            onChange={(e)=>setCurrent(e.target.value)}
            />
            <TextField id="outlined-basic" label="Targets (separated by comma)" variant="outlined" fullWidth 
            value={targets}
            onChange={(e)=>setTargets(e.target.value)}
            />
            <Button variant="contained" color="secondary" onClick={clickUpdate}>Update</Button>     
          </div>
        </Paper>
      </Container>
    </Box>
  );
}