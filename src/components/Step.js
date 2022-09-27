import * as React from 'react';
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

  return <Button variant="contained" color="secondary" onClick={clickStep}>Step</Button> ;
}