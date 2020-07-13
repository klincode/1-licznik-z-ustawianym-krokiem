import React, { useState } from 'react'
import './Counter.css'
import Display from './Display'
import ButtonsPanel from './ButtonsPanel'
import Step from './Step'

// handleStep = (value) => {
//   setStepValue(Number(value));
//   // this.setState({ step: Number(value) })
// }

const Counter = (props) => {
  const [counterValue, setCounterValue] = useState(props.initValue);
  const [stepValue, setStepValue] = useState(props.initStepValue);

  const handleStep = (value) => {
    setStepValue(Number(value));
  }

  const changeValue = (action) => {
    let currentCounterValue = counterValue;
    if (action === 'add') {
      currentCounterValue += 1;
    } else if (action === 'reinit') {
      currentCounterValue = props.initValue;
    }
    else if (action === 'step') {
      currentCounterValue += stepValue
    }
    else {
      currentCounterValue = 0;
    }

    setCounterValue(currentCounterValue)
  }

  return (
    <div className="counter">
      Licznik :
      <Display value={counterValue} />
      <ButtonsPanel buttonMethod={changeValue} step={stepValue} />
      <Step step={stepValue} stepMethod={handleStep} />
    </div>
  )


}

export default Counter

