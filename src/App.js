import './App.css';
import React, { useState, useEffect, useReducer } from 'react';

function ShowMe() {
  return <h1>I'm <span style={{ color : 'green' }}>show</span> to you becouse you <span style={{color : 'green'}}>are authorized!</span></h1>
}

function HideMe() {
  return <h1>I'm <span style={{color : 'red'}}>hide</span> to you becouse you <span style={{color : 'red'}}>aren't authorized!</span></h1>
}

function App() {
  const [authorized, handleClick] = useReducer(
    (checked) => !checked, 
    false
  );

  return (
    <>
      { authorized ? <ShowMe /> : <HideMe /> }
      <button onClick={handleClick}>Handle authorizations</button> 
    </>
  );
}

export default App;
