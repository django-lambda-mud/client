import React from 'react';
import MainGame from "./components/MainGame/MainGame";
import Character from "./components/Dashboard/Character/Character";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
// import PrivateRoute from "./components/Auth/PrivateRoute";
import { Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Route exact path="/fdg" component={Register}/>      
      <Route exact path="/login" component={Login}/>
      <Route exact path="/game" component={MainGame}/>
      <Route exact path="/" component={Character}/>
    </div>
  );
}

export default App;
