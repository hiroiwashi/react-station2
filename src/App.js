import logo from './logo.svg';
import './App.css';
import { Threads } from './components/Threads';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>掲示板</h1>
      </header>
      <Threads />
    </div>
  );
}

export default App;
