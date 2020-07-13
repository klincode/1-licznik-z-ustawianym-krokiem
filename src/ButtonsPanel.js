import React from 'react';
import './ButtonsPanel.css'
const ButtonPanels = (props) => {
  return (
    <div className="buttons-panel">
      <button onClick={() => props.buttonMethod('add')}>Add 1</button>
      <button onClick={() => props.buttonMethod('step')}>Zwiększ o : {props.step}</button>
      <button onClick={() => props.buttonMethod('reinit')}>Reinit</button>
      <button onClick={() => props.buttonMethod('reset')}>Reset</button>
    </div>
  )
}

export default ButtonPanels