import './App.css';
import React, { useState } from 'react';

function ShowMe() {
  return <h1>I'm <span style={{ color : 'green' }}>show</span> to you becouse you <span style={{color : 'green'}}>are authorized!</span></h1>
}

function HideMe() {
  return <h1>I'm <span style={{color : 'red'}}>hide</span> to you becouse you <span style={{color : 'red'}}>aren't authorized!</span></h1>
}

function App() {
  const [authorized, setAuthorized] = useState(false);
  return (
    <>
      { authorized ? <ShowMe /> : <HideMe /> }

      { authorized 
        ? <button onClick={() => setAuthorized(!authorized)}>Revocation authorization</button> 
        : <button onClick={() => setAuthorized(!authorized)}>Allow authorization</button> }
    </>
  );
}

export default App;
