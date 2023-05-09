import {useState} from 'react'

import "./App.css"

function App() { 
  const[count, setCount] = useState(0);
  function Inc(){
    setCount(count + 1)
  }
  function Dec(){
    setCount(count - 1)
  }
  return (
    <div className='container'>
      <h1 className='container-heading'>Simple Counter</h1>
      <h2 className='text-heading'>{count}</h2>

      <div className='button-container'>
      <button className='btn btn-inc' onClick={Inc}>+</button>
      <button className='btn btn-dec' onClick={Dec}>-</button>
      </div>
      <h3 className='copy-counter'>Copy Counter ={count}</h3>
    </div>
  )
}
export default App
