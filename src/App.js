import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import NuevaCuenta from "./components/auth/NuevaCuenta";
import Privado from "./components/anuncios/Privado";
import AdsComp from './components/publicADS/addlist';
import DetailComponent from './components/publicADS/detail';

import AnunciosState from "./context/anuncios/anunciosState";

function App() {
  return (
    <AnunciosState>
      <Router>
        <Switch>
          <Route exact path="/ads" component={AdsComp} /> 
          <Route path="/ads/:adId" component={DetailComponent} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/nueva-cuenta" component={NuevaCuenta} />
          <Route exact path="/privado" component={Privado} />
        </Switch>
      </Router>
    </AnunciosState>
  );
}

export default App;
