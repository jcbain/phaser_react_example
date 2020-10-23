import React, { useState }  from 'react';
import {Route, BrowserRouter as Router, Link, Switch} from 'react-router-dom'
import Game from './Game';
import useLoadedGame from './hooks/useLoadedGame'


function App() {

  const [ counter, setCounter ] = useState(0)
  const [ loaded ] = useLoadedGame();

  const onclick = () => {
    setCounter(prev => prev + 1)
  }
  return (
    <div className="App">
      <Game initialized={loaded}/>
      <button onClick={onclick}>{counter}</button>
    </div>
  );
}

export default App;
