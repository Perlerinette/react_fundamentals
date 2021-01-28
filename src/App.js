import React from 'react';
import './App.css';
import Header from './components/Header';
import AboutMe from './components/challenges/day01/AboutMe';
import Footer from './components/challenges/day01/Footer';
import Home from './components/challenges/day01/Home';


function App() {
  const name = "Laurine";

  // JS above return() statement can be injected into JSx using {}
  return (
   <div className ="App">
      <h1>Welcome to React, {name}</h1>
      <h2>We just modified our root App component</h2>

      <Header />

      <AboutMe />

      <Home />

      <Footer />

   </div>
   
  );
}



export default App;
