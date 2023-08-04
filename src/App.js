import logo from './logo.svg';
import './App.css';
import Dashboard from './Components/Dashboard';
import React ,{useState} from "react";
import Stats from './Components/Stats';


function App() {

  const[state, setState] = useState(true);


  return (
    <div className="App">
      <h1>ADMIN DASHBOARD</h1>
        <div>
            <button onClick={()=>setState(true)}>DASHBOARD</button> &nbsp; &nbsp;
            <button onClick={()=>setState(false)}>STATS</button>
        </div>
        {
          state? <Dashboard/> : <Stats/>
        }
    </div>
  );
}

export default App;
