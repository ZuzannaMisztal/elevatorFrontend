import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/system';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

export default class Initialization extends React.Component {
    constructor() {
        super()
        this.state = JSON.parse(window.localStorage.getItem('state')) || { allowInitialization: true }
        this.paperStyle={padding:'10px 20px', width:200, margin:"20px auto"}
        this.numElevators = 0
    }

    handleClick=(e)=>{
        e.preventDefault()
        fetch("http://localhost:8080/elevator/initialize",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(this.numElevators)
        }).then(()=>{
            window.location.reload()
            console.log("Elevators initialized")
            this.setState({...this.state, allowInitialization: false})
        })
    }

    InitWindow = () => (
        <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, mx: 'auto' },
        }}
        noValidate
        autoComplete="off"
        >
        <Container>
            <Paper elevation={3} style={this.paperStyle}>
                <h1 style={{color:"blue"}}><u>Initialize Elevators</u></h1>

                <TextField id="outlined-basic" label="Number of elevators" variant="outlined" fullWidth 
                value={this.numElevators}
                onChange={(e)=>this.setNumElevators(e.target.value)}
                />

                <Button variant="contained" color="secondary" onClick={this.handleClick}>Submit</Button>
            </Paper>
        </Container>
      </Box>
      )

    render() {
        return (
            <div>
                { this.allowInitialization ? <this.InitWindow /> : null }
            </div>
          );
    }

}