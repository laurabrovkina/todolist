import React, { Component } from 'react';
import './App.css';
import ToDoAddString from "./ToDoAddString.js";

class App extends React.PureComponent {
  render() {
    return (
      <body>
      <div className="App">
          <header className="ListHeader">
            TODO List 
          </header>
      <div className="InputContainer">
        <ToDoAddString />
      </div>    
      </div>
    </body>
    );
  }
}

export default App;
