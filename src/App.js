import React from 'react';
import './App.css';
import PathfindingVisualizer from './PathfindingVisualizer/PathfindingVisualizer';

function App() {
  return (
    <div className="App">
      <>
      <div className='head'>
        <h1> WELCOME TO PATH TRACKER </h1>
      </div>
      <PathfindingVisualizer></PathfindingVisualizer>
      </>
      
    </div>
  );
}

export default App;
