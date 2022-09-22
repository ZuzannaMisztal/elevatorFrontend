import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/system';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

export default function Elevator() {
    const paperStyle={padding:'50px 20px', width:200, margin:"20px auto"}
    const[current,setCurrent]=React.useState('')
    const[target, setTarget]=React.useState('')
    const[elevators, setElevators]=React.useState([])

    const handleClick=(e)=>{
        e.preventDefault()
        const elevator={current, target}
        console.log(elevator)
        fetch("http://localhost:8080/elevator/add",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(elevator)
        }).then(()=>{
            console.log("New elevator added")
        })
    }

    React.useEffect(()=>{
        fetch("http://localhost:8080/elevator/getAll")
        .then(res=>res.json())
        .then((result)=>{
            setElevators(result);
        })
    }, [])

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
            <h1 style={{color:"blue"}}><u>Add Elevator</u></h1>
            <TextField id="outlined-basic" label="Elevator Current" variant="outlined" fullWidth 
            value={current}
            onChange={(e)=>setCurrent(e.target.value)}
            />
            <TextField id="outlined-basic" label="Elevator Target" variant="outlined" fullWidth 
            value={target}
            onChange={(e)=>setTarget(e.target.value)}
            />
        <Button variant="contained" color="secondary" onClick={handleClick}>Submit</Button>
        </Paper>

        <h1>Elevators</h1>

        <Paper elevation={3} style={paperStyle}>

            {elevators.map(elevator=>(
                <Paper elevation={6} style={{margin:"10px", padding:"15px", textAlign:"left"}} key={elevator.id}>
                    Id:{elevator.id}<br/>
                    Current:{elevator.current}<br/>
                    Target:{elevator.target}<br/>
                </Paper>
            ))}

        </Paper>

    </Container>
    </Box>
  );
}
