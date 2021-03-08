// import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

function App() {

  // const [state, setstate] = useState('red');

  // function change() {
  //   setstate(state === 'red' ? 'blue' : 'red')
  // }
  const [value, setValue] = useState(true);

  const birthnes = value ? "Bright" : "Dark"

  function change() {
    setValue((prev) => !prev)
  }
  return (
    <div className={`room ${birthnes}`}>
      <div>This Room is {(value === true) ? 'Bright' : 'Dark'}</div>
      <button onClick={change}>Change</button>
    </div>
  );
}

export default App;
