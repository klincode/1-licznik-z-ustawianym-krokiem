import React, { useReducer } from 'react'

const initialState = {
  init: 1,
  result: 1
}

const reducer = (state, action) => {
  // console.log(state);
  switch (action.type) {
    case 'add': return { ...state, result: state.result + 1 }
    case 'addStep': return { ...state, result: state.result + action.step }
    case 'reset': return { ...state };
    // case 'reInit': return initialState;
    // default: throw new Error('Wystąpił błąd...');
    default:
      throw new Error('Unexpected action');
  }
}

export { reducer, initialState }