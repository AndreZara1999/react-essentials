import './App.css';

function Header() {
  return (
    <header>
      <h1>Header</h1>
    </header>
  );
}

function Main() {
  return (
    <section>
      <p>Lorem Ipsum</p>
    </section>
  )
}

function Footer() {
  return(
    <footer>
      <h4>Footer</h4>
    </footer>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
