import logo from './logo.svg';
import './App.css';

function App() {
  const name="dana";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
           Say Hello to Dhananjeyan Prabu!!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>{"dana"}</p>
        <p>{[1,2,3]}</p> 
        <p>{name}</p>
        

      </header>
    </div>
  );
}

export default App;
