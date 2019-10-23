import React from 'react';
import styled from 'styled-components';
import MainGame from "./components/MainGame/MainGame";
import Character from "./components/Dashboard/Character/Character";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import PrivateRoute from "./components/Auth/PrivateRoute";
import { Route } from "react-router-dom";
import './App.css';
// import img from './assets/2.jpg'

const AppWrapper = styled.div`
  min-height: 100vh;
  height: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
`;


function App() {
  return (
    <AppWrapper>
      <Route exact path="/register" component={Register}/>      
      <Route exact path="/" component={Login}/>
      <PrivateRoute exact path="/game" component={MainGame}/>
      <PrivateRoute exact path="/character" component={Character}/>
    </AppWrapper>
  );
}

export default App;
