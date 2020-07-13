import React from 'react';
import './Step.css'
class Step extends React.Component {
  constructor(props) {
    super(props);
    // this.inputNumberRef = React.createRef();
  }

  // handleStep = () => {
  //   // console.log();
  //   let step = this._inputStep.value
  //   console.log(step);
  // }
  render() {

    return (
      <div className="step">
        <span>Krok: </span>
        <input ref={(data) => { this._inputStep = data }} type="number" name="number" min="1" defaultValue={this.props.step} onChange={() => this.props.stepMethod(this._inputStep.value)} />

      </div>
    )
  }
}

export default Step;