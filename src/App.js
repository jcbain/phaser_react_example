import React, { useState }  from 'react';
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
      <h1>hello</h1>
      <button onClick={onclick}>{counter}</button>
      <Game initialized={loaded}/>
      
      

    </div>
  );
}

export default App;
