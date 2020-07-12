import React, { useState } from "react";
import {Link} from 'react-router-dom';

const NuevaCuenta = () => {
    // State iniciar sesion
    const [usuario, guardarUsuario] = useState({
        nombre: '',
        email: '',
        password: '',
        confirmar: ''
    });

    //extrear de usuario
    const {nombre, email, password, confirmar} = usuario;
    const onChange = e =>{
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })

    }

    const onSubmit = e => {
        e.preventDefault();
        
    }

    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Crea una cuenta</h1>
                <forms onSubmit={onSubmit} action="">
                    
                    <div className="campo-form">
                        <label htmlFor="nombre"> Nombre</label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            placeholder="Tu nombre"
                            value={nombre}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="email"> Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Tu Email"
                            value={email}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="password"> Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="Confirmar"> Confirmar Password</label>
                        <input
                            type="password"
                            id="confirmar"
                            name="confirmar"
                            placeholder="Repite tu pasword"
                            value={confirmar}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form"></div>
                        <input type="submit" className="btn btn-primario btn-block" value="Iniciar Sesion"/>
                </forms>
                <Link to={'/login'} className="enlace-cuenta">
                    Ir a LogIn
                </Link>
            </div>
        </div>
    );
};

export default NuevaCuenta;
