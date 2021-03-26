import './App.css';

function Header(props) {
  return (
    <header>
      <h1>{props.title}</h1>
    </header>
  );
}

function Main(props) {
  return (
    <section>
      <p>{props.paragraph}</p>
    </section>
  )
}

function Footer(props) {
  return(
    <footer>
      <h4>Footer. Copyright {props.year}</h4>
    </footer>
  );
}

function App() {
  return (
    <div className="App">
      <Header title='Hello World!'/>
      <Main paragraph='Lorem Ipsum Dolor'/>
      <Footer year={new Date().getFullYear()}/>
    </div>
  );
}

export default App;
