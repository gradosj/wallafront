import React, {useContext, useEffect, Component} from 'react';
import {Route, Redirect} from 'react-router-dom';
import AuthContext from './../../context/autenticacion/authContext';

const RutaPrivada = ({component: Component, ...props }) => {

    const authContext = useContext(AuthContext);
    const {autenticado, usuarioAutenticado, cargando} = authContext;

    useEffect(() => {
        usuarioAutenticado();

    }, []);


    return ( 
        <Route { ...props} render={props => !autenticado && !cargando ? (
            <Redirect to="/login" />

        )    : (
            <Component {...props} />

        ) } />
    );
}

export default RutaPrivada;