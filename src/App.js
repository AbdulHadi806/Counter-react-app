import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
// usestate
const [state, setState] = useState(0)
  const handleAdd = () => {
    if(state < 10){
      setState(state + 1)
    }
  }
  const Substact = () => {
    if(state > 0){
      setState(state - 1)
    }
  }
  const Retry = () => {
    setState(0)
  }
  return (
    <div className="App">
      <div className='background'>
      <header className="App-header">
      <h1>Counter 1</h1>
      <span>{state}</span>
        <div className ='button'>
        <button onClick={handleAdd}>Add</button>
        <button onClick={Retry}>Reset</button>
        <button onClick={Substact}>Substact</button>   
        </div>
      </header>
      </div>
    </div>
  );
}

export default App;