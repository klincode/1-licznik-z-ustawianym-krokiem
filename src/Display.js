import React from 'react';
import './Display.css'
const Display = (props) => {
  return (
    <span className={`value ${props.value <= 5 ? 'blue' : 'red'}`}>
      {props.value}
    </span>
  )
}

export default Display