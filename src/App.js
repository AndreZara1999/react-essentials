import './App.css';
import logo from './logo192.png';

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
      <img 
        src={logo} 
        alt="React logo" 
        height={100}
      />
      <p>{props.paragraph}</p>
      {
        props.users.map((user, index) => {
          return <p key={index}>{user}</p>
        })
      }
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

const users = [
  'Andrea', 'Giulia', 'Luca', 'Antonella', 'Nonna'
]

function App() {
  return (
    <div className="App">
      <Header title='Hello World!'/>
      <Main paragraph='Lorem Ipsum Dolor' users={users}/>
      <Footer year={new Date().getFullYear()}/>
    </div>
  );
}

export default App;
