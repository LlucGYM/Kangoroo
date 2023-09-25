import logo from './logo.svg';
import './App.css';

import React, {useEffect, useState} from "react";
import {Switch, Route, useLocation} from "wouter";

import Home from "./Paginas/Home";
import ComoSerKanguro from "./Paginas/ComoSerKanguro";
import Reservas from "./Paginas/Reservas";
import AboutUs from "./Paginas/AboutUs";


function App() {
  return (
      <div>
          <Switch>
          <Route component={Home} path="/"/>
          <Route component={Reservas} path="/Reservas"/>
          <Route component={AboutUs} path="/SobreNosotros" />
          <Route component={ComoSerKanguro} path="/ComoSerKanguro" />
        </Switch>
      </div>
  );
}

export default App;
