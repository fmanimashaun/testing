import React from 'react'

const Mybutton = ({ onButtonClick, counter }) => {

  return (
    <div>
      <h1>Hello world</h1>
      <button onClick={onButtonClick}>Click me {counter}</button>
    </div>
  )
}

export default Mybutton
