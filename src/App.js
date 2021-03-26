import './App.css';

function ShowMe() {
  return <h1>I'm <span style={{ color : 'green' }}>show</span> to you becouse you <span style={{color : 'green'}}>are authorized!</span></h1>
}

function HideMe() {
  return <h1>I'm <span style={{color : 'red'}}>hide</span> to you becouse you <span style={{color : 'red'}}>aren't authorized!</span></h1>
}

function App(props) {
  return (
    <>
      { props.authorized ? <ShowMe /> : <HideMe /> }
    </>
  );
}

export default App;
