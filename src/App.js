import React from 'react';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './components/auth/Login';
import NuevaCuenta from './components/auth/NuevaCuenta';
import Anuncios from './components/anuncios/Anuncios';

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/nueva-cuenta" component={NuevaCuenta} />
          <Route exact path="/anuncios" component={Anuncios} />

        </Switch>
    </Router>
    
  );
}

export default App;
