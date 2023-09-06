import React from 'react'
import './index.css'
import { useState } from 'react';

const NameMaker = () => {

 const [color, setColor] = useState('Blue');
 const [count, setCount] = useState(0);
 const [highScore, setHighScore] = useState(25); 
 const [newName, setNewName] = useState('');

  const handleChange = (e) => {
    // e. target.value is what the input would be with this change
    // if the pinut right now says "happ" and the user types "y" 
    //e.target.value is "happy" 
    setNewName(e.target.value);
  } 


  return (
    <div>
      <div>
      <button onClick={() => setColor('blue')}>Blue</button>
      <button onClick={() => setColor('red')}>Red</button>
      <button onClick={() => setColor('green')}>Green</button>
    </div>
  <p className = {color}>The current Color is {color}</p>
    <p> The count is {count}</p>
    <button onClick={() => setCount(count+1)} >Add +1</button>

    <p>The high score is {highScore} clicks!</p>

    { count > highScore ? <p>You beat the high score by {}</p>: <></>}

    <input  value={newName} onChange={(e)=> handleChange(e)} />



    {/* we are going to get the change event, and use it to change the state, the state will change the input*/}











  </div>
  )
}

export default NameMaker