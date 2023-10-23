import React, { useState } from 'react';
import './App.css';
import Aapp from './Nav';
import Foot from './Footer';
import Her from './Her';
import Home from './List';
import Cities from './Cities';


function App() {
  const [selectedCountry, setSelectedCountry] = useState('');
  return (
    

    <div className="App">
      <Aapp/>
  
    
   
      <Her/>
    
    
   
      <Home selectedCountry={selectedCountry} setSelectedCountry={setSelectedCountry} />
      <Cities selectedCountry={selectedCountry} />
    
   
    <Foot/>
    
    </div>
    
  );

}

export default App;

