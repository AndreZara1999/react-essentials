import './App.css';
import React, { useEffect, useState } from 'react';

function App({ user }) {
  const [data, setData] = useState(null);

  useEffect(_ => {
    fetch(`https://api.github.com/users/${user}`)
      .then((response) => response.json())
      .then(setData)
      .catch(error => console.log(`Error! Error! Error! -- - ${error}`));
  }, []);

  if(data) {
    return <div>{ JSON.stringify(data) }</div>
  }
  else {
    return <div>No user available</div>
  }
}

export default App;
