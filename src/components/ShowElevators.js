import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function ShowElevators() {
    const paperStyle={padding:'10px 10px', margin:"20px auto" }
    const[elevators, setElevators]=React.useState([])

    React.useEffect(()=>{
        fetch("http://localhost:8080/elevator/getAll")
        .then(res=>{
          return res.json();
        })
        .then((result)=>{
            setElevators(result);
        })
    }, [])

  return (
    <Box sx={{'& > :not(style)': { m: 1}}}>
      <h1>Elevators</h1>
      <Paper elevation={3} style={paperStyle} >
        <div className='rowC'>
          {elevators.map(elevator=>{
              return <Paper elevation={6} style={{margin:"10px auto", padding:"7px", textAlign:"left"}} key={elevator.id}>
                  Id: {elevator.id}<br/>
                  Current: {elevator.current}<br/>
                  Targets:<br/>
                  <div className='rowC'>
                    {elevator.targets.map(target=> ( <div> {target}, </div> ))}
                  </div>
              </Paper>
          })}
        </div>  
      </Paper>
    </Box>
  );
}
