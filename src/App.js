import React from 'react';
import './App.css';

import NameProp from './components/NameProp';
import Contacts from './components/Contacts';
import State from './components/State';



function App() {
  const person = {name:"Lau", age: "36", school:"EFA", graduationYear:"2021"}
  // JS above return() statement can be injected into JSx using {}
  return (
   <div className ="App">
      {/* <NameProp name="Lau" /> */}
      <Contacts name="Laurine" age="36" school="1150A" graduationYear="2021" />
      <Contacts {...person} /> {/* another way to do it */}
      <p>-----------------------</p>

      <State />

   </div>
   
  );
};



export default App;
