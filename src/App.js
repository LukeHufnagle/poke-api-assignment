import logo from './logo.svg';
import './App.css';
import PokeApi from './components/PokeApi';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>POKEMON API APP</h1>
        <PokeApi></PokeApi>
      </div>
    </div>
  );
}

export default App;
