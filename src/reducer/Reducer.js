import React, { useReducer } from 'react'

const initialState = {
  result: 10,
  step: 5
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'add': return { ...state, result: state.result + 1 }
    case 'addStep': return { ...state, result: state.result + Number(state.step) }
    case 'reset': return { ...state, result: 0, step: 1 };
    case 'setStep': return { ...state, step: action.step };
    case 'reInit': return initialState;

    default:
      throw new Error('Unexpected action');
  }
}

export { reducer, initialState }