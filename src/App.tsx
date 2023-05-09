import { useState, useCallback } from 'react';
import './App.css';
import Child from './Child';
const App = (props: any) => {
  const arr = [1, 2, 3];
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');
  console.log('parent called');
  const increase = useCallback(() => {
    setCount(count + 1)
  }, [count])
  return (
    <div className="App">
      <header className="App-header">
        <Child arr={arr} count={count} updateCounter={increase} />
        <input type="text" onChange={e => setInput(e.target.value)} value={input} />
        <button onClick={increase}>click</button>
        <div>{count}</div>
      </header>
    </div>
  );
}

export default App;
