import React, { Fragment } from "react";

import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import NuevaCuenta from "./components/auth/NuevaCuenta";
import Privado from "./components/anuncios/Privado";
import AdsComp from "./components/publicADS/addlist";
import DetailComponent from "./components/publicADS/detail";

import AnunciosState from "./context/anuncios/anunciosState";
import AnunciosPRState from "./context/anunciosPR/anunciosPRState";

import AlertaState from "./context/alertas/alertaState";

import AuthState from "./context/autenticacion/authState";
import tokenAuth from "./config/token";
import RutaPrivada from "./components/rutas/rutaPrivada";

//revisar si tenemos un token
const token = localStorage.getItem("token");

if (token) {
  tokenAuth(token);
}

function App() {
  console.log(process.env.REACT_APP_BACKEND_URL);
  return (
    <Fragment>
      <AnunciosState>
        <AnunciosPRState>
          <AlertaState>
            <AuthState>
              <Router>
                <nav className="bg-primary">
                  <ul className="nav nav-pills nav-fills navbar navbar-light bg-light">
                    <li className="nav-item">
                      <Link to="/ads" className="nav-link">
                        Anuncios
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/nueva-cuenta" className="nav-link">
                        Registrarse
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/login" className="nav-link">
                        Iniciar sesión
                      </Link>
                    </li>
                  </ul>
                </nav>
                <Switch>
                  <Route exact path="/ads" component={AdsComp} />
                  <Route path="/ads/:adId" component={DetailComponent} />
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/nueva-cuenta" component={NuevaCuenta} />
                  <RutaPrivada exact path="/privado" component={Privado} />
                </Switch>
              </Router>
            </AuthState>
          </AlertaState>
        </AnunciosPRState>
      </AnunciosState>
    </Fragment>
  );
}

export default App;
