import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome <code>D24 Media</code>.
        </p>
        <a
          className="App-link"
          href="https://d24.me"
          target="_blank"
          rel="noopener noreferrer"
        >
          D24 Media
        </a>
      </header>
    </div>
  );
}

export default App;
