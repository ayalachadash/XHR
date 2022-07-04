import React from 'react';
import './App.css';
import ReadJson from './components/ReadJson.component';

// import {XMLHttpRequest} from 'xmlhttprequest-ts';
// var xhr = new XMLHttpRequest();
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>hello app</p>
        <ReadJson/>
      </header>
    </div>
  );
}

export default App;
