import React, { Component, useReducer } from 'react';
import { reducer, initialState } from './Reducer'

const Counter2 = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  console.log(state);
  return (
    <>
      <h1>Reducer Counter</h1>
      <div className="counter">
        Licznik: <span className='value'> {state.result}</span>
        <div>
          <button onClick={() => dispatch({ type: 'add' })}>Add 1</button>
          <button onClick={() => dispatch({ type: 'addStep', step: 5 })}>Zwiększ o: </button>
          <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
          <button onClick={() => dispatch({ type: 'reInit' })}>Reinit</button>

        </div>

      </div>
    </>
  );
}

export default Counter2;
