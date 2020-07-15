import React, { useReducer } from 'react'

const initialState = 1;

const reducer = (state, action, initialState, step) => {
  switch (action) {
    case 'add': return state + 1;
    case 'addStep': return state + step;
    case 'reset': return 0;
    case 'reInit': return initialState;
    default: throw new Error('Wystąpił błąd...');
  }
}

export { reducer }