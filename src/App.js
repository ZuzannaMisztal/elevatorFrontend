import Appbar from './components/Appbar'
import ShowElevators from './components/ShowElevators'
import Initialization from './components/init';
import PickUp from './components/PickUp';
import Step from './components/Step';
import AddTarget from './components/AddTarget';
import Update from './components/Update';
import './App.css';
import React from 'react';              


function App() {

  // const[initActive, setInitActive] = React.useState('')

  // const childToParent = (childdata) => {
  //   setInitActive(childdata)
  // }

  // const parentToChild = () => {

  // }

  return (
    <div className="App">
      {/* <Appbar childToParent={childToParent(initActive)}/>
      <Initialization parentToChild={initActive}/> */}
      <Appbar/>
      <Initialization/>
      <ShowElevators/>
      <Step/>
      <div className='rowC'>
      <PickUp/>
      <AddTarget/>
      <Update/>
      </div>
    </div>
  );
}

export default App;
