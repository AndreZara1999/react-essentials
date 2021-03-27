import './App.css';
import React, { useState, useEffect } from 'react';

function ShowMe() {
  return <h1>I'm <span style={{ color : 'green' }}>show</span> to you becouse you <span style={{color : 'green'}}>are authorized!</span></h1>
}

function HideMe() {
  return <h1>I'm <span style={{color : 'red'}}>hide</span> to you becouse you <span style={{color : 'red'}}>aren't authorized!</span></h1>
}

function App() {
  const [authorized, setAuthorized] = useState(false);
  
  /**
   * Only one param -- - Work with the first redenring and every time 
   * that the state chages
   * 
   * Two params that the second is empty array -- - Work for only the
   * render
   * 
   * Two params that second is an Array of value (useState) -- - Work
   * for render and when the state chenge, but show only state that I 
   * passed in the array  
   */
  useEffect(_ => {
    console.log(`State: ${authorized}`);
  }, [authorized])

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
