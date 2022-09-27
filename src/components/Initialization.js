import * as React from 'react';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

export default function Initialization() {
    const paperStyle={padding:'20px 20px', width:200, margin:"20px auto"}
    const[numElevators, setNumElevators]=React.useState('')

    const handleClick=(e)=>{
        e.preventDefault()
        console.log(numElevators)
        fetch("http://localhost:8080/elevator/initialize",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(numElevators)
        }).then(()=>{
            window.location.reload()
            console.log("Elevators initialized")
        })
    }

    return (
        <Paper elevation={3} style={paperStyle}>
            <h1>Initialize Elevators</h1>
            <TextField id="outlined-basic" label="Number of elevators" variant="outlined" fullWidth 
            value={numElevators}
            onChange={(e)=>setNumElevators(e.target.value)}
            />
            <Button variant="contained" color="secondary" onClick={handleClick}>Submit</Button>
        </Paper>
    );
}