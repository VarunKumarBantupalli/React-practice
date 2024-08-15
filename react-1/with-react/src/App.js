import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import navbar  from './components/navbar';

function App() {
  return (
    <div className="App">
      const [value ,setValue] = useState(0)
      return (
        <div className ="App">
          <navbar/>
          <div className = "value">{value}</div>
          <button>
            onClick = {()=>{setValue(value + 1)}}click me
          </button>
        </div>
      )
    </div>
  );
}

export default App;
