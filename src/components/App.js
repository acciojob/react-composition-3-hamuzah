// src/App.js
import React from 'react';
import Tooltip from './components/Tooltip';

function App() {
  return (
    <div className="App">
      <h1>React Tooltip Example</h1>
      <Tooltip text="This is a tooltip for the first element">
        <span>Hover over me</span>
      </Tooltip>
      <br /><br />
      <Tooltip text="This is another tooltip for the second element">
        <button>Hover over this button</button>
      </Tooltip>
    </div>
  );
}

export default App;
