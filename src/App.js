import Appbar from './components/Appbar'
import ShowElevators from './components/ShowElevators'
import Initialization from './components/Initialization';
import PickUp from './components/PickUp';
import Step from './components/Step';
import AddTarget from './components/AddTarget';
import Update from './components/Update';
import './App.css';
import React from 'react';              


function App() {

  const[showFunctionality, setShowFunctionality]=React.useState()

  React.useEffect(()=>{
    fetch("http://localhost:8080/elevator/getAll")
    .then(res=>{
      return res.json();
    })
    .then((result)=>{
        if (result.length !== 0) {
            setShowFunctionality(true)
        } else {
            setShowFunctionality(false)
        };
    })
    })

  return (
    <div className="App">
      <Appbar/>
      { !showFunctionality ?
        <Initialization/>
        :
        <div>
          <ShowElevators/>
          <Step/>
          <div className='rowC'>
            <PickUp/>
            <AddTarget/>
            <Update/>
          </div>
        </div>
      }
    </div>
  );
}

export default App;
