import React, { useState }  from 'react';
import Game from './Game';


function App() {

  const [ counter, setCounter ] = useState(0)
  const [initialized, setInitialized ] = useState(false)

  const onclick = () => {
    setCounter(prev => prev + 1)
    if (!initialized) {
      setInitialized(true)
    }
  }
  return (
    <div className="App">
      <h1>hello</h1>
      <button onClick={onclick}>{counter}</button>
      <Game initialized={initialized}/>
      

    </div>
  );
}

export default App;
