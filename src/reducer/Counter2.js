import React, { Component, useReducer } from 'react';
import { reducer, initialState } from './Reducer'
import { useState } from 'react';

const Counter2 = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  // console.log(state);
  return (
    <>
      <h1>Reducer Counter</h1>
      <div className="counter">
        Licznik: <span className='value'> {state.result}</span>
        <div>
          <button onClick={() => dispatch({ type: 'add' })}>Add 1</button>
          <button onClick={() => dispatch({ type: 'addStep' })}>Zwiększ o: {state.step}</button>
          <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
          <button onClick={() => dispatch({ type: 'reInit' })}>Reinit</button>
        </div>
        {/* <Step step={state.step} /> */}
        <input type="number" name="number" min="1" value={state.step} onChange={(e) => dispatch({ type: 'setStep', step: e.target.value })} />
      </div>
    </>
  );
}

export default Counter2;
