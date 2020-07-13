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
    // this.setState({ step: Number(value) })
  }

  const changeValue = (action) => {

    this.setState((prevState, prevProps) => {
      let currentCounterValue = prevState.counterValue;

      if (action === 'add') {
        currentCounterValue += prevState.step;
      } else if (action === 'reinit') {
        currentCounterValue = prevProps.initValue;
      }
      else if (action === 'step') {
        currentCounterValue += prevState.step
      }
      else {
        currentCounterValue = 0;
      }
      return (
        { counterValue: currentCounterValue }
      )
    })

  }

  // let randomNumber = Math.floor(Math.random() * (108) + 1);
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

