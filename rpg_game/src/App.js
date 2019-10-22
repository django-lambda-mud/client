import React from 'react';
import MainGame from "./components/MainGame/MainGame";
import Character from "./components/Dashboard/Character/Character";
import { Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Route exact path="/game" component={MainGame}/>
      <Route exact path="/" component={Character}/>
    </div>
  );
}

export default App;
