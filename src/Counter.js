import React from 'react'
import './Counter.css'
import Display from './Display'
import ButtonsPanel from './ButtonsPanel'
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counterValue: this.props.initValue
    }
    this.changeValue = this.changeValue.bind(this);
  }


  changeValue(action) {


    this.setState((prevState, prevProps) => {
      let currentCounterValue = prevState.counterValue;

      if (action === 'add') {
        // this.setState((prevState) => ({ counterValue: prevState.counterValue + 1 }))
        currentCounterValue += 1;
      } else if (action === 'reinit') {
        currentCounterValue = prevProps.initValue;
      } else {
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
        Counter :

        <Display value={this.state.counterValue} />
        <ButtonsPanel buttonMethod={this.changeValue} />
      </div>
    )

  }
}

export default Counter