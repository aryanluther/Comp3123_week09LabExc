import logo from './logo.svg';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{props.welcome}</h1>
        <h2>{props.topic}</h2>
        <h3>{props.stid}</h3>
        <h3>{props.fname}</h3>
        <h3>{props.college}</h3>
      </header>
    </div>
  );
}

export default App;
