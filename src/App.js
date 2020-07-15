import React from 'react';
import Counter from './Counter'
import Counter2 from './reducer/Counter2'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Counter App in ReactJS</h1>
      </header>
      {/* <Counter initValue={0} initStepValue={1} /> */}
      {/* <Counter initValue={108} /> */}
      <Counter2 initialState={1} />
    </div>
  );
}

export default App;
