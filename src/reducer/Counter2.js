import React, { Component, useReducer } from 'react';
import { reducer } from './Reducer'

const Counter2 = ({ initialState }) => {
  const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="counter">
      <h1>Reducer Counter</h1>

      {count}
      <button onClick={() => dispatch('add')}>Add 1</button>

    </div>
  );
}

export default Counter2;
