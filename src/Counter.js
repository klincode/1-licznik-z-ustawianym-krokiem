import React from 'react'
import './Counter.css'
import Display from './Display'
import ButtonsPanel from './ButtonsPanel'
import Step from './Step'
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counterValue: this.props.initValue,
      step: this.props.initStepValue,
    }
    this.changeValue = this.changeValue.bind(this);
  }

  handleStep = (value) => {
    this.setState({ step: Number(value) })
  }
  changeValue(action) {
    this.setState((prevState, prevProps) => {
      let currentCounterValue = prevState.counterValue;

      if (action === 'add') {
        currentCounterValue += 1;
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

  render() {
    // let randomNumber = Math.floor(Math.random() * (108) + 1);
    return (
      <div className="counter">
        Licznik :
        <Display value={this.state.counterValue} />
        <ButtonsPanel buttonMethod={this.changeValue} step={this.state.step} />
        <Step step={this.state.step} stepMethod={this.handleStep} />
      </div>
    )

  }
}

export default Counter