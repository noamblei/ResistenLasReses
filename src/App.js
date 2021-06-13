import logo from "./logo.png"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './Components/NavBar/NavBar.js';
import { ItemListContainer } from './Components/ItemListContainer/ItemListContainer.js'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer tittle="Carro" message="Carro"/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Se vienen cosas facheras...
        </p>
        <a 
          className="App-link"
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get Rick Rolled
        </a>
      </header>
    </div>
  );
}

export default App;
