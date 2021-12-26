import logo from './logo.svg';
import './App.css';
import GrandFather from './components/GrandFather/GrandFather';
import { useState } from 'react';


function App() {
  const[house,setHouse]=useState(2);

  return (
    <div className="App">
       <button onClick={()=>setHouse(house+1)}>Buy a new House</button>
      <GrandFather house={house}></GrandFather>
     
      
    </div>
  );
}

export default App;
