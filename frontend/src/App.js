import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
  function doBadThings(input){
    const numbers = [10, 2, 30, 1, 5];
    numbers.sort(); // Noncompliant: lexicographic sort
    console.log(numbers); // Output: [1, 10, 2, 30, 5]
  }
}

export default App;
