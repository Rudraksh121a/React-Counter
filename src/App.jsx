import { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);


  const addValue = () => {
    setCounter((prevCounter) => {
      
      if (prevCounter < 20) {
        return prevCounter + 1;
      }
      return prevCounter;
    });
  };


  const removeValue = () => {
    setCounter((prevCounter) => {
      if (prevCounter > 0) {
        return prevCounter - 1;
      }
      return prevCounter; 
    });
  };

  return (
    <>
      <h1>Chai or React</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;
