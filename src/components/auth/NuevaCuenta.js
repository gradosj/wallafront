import React, { useState } from "react";
import {Link} from 'react-router-dom';

const Login = () => {
    // State iniciar sesion
    const [usuario, guardarUsuario] = useState({
        email: '',
        password: ''
    });

    //extrear de usuario
    const {email, password} = usuario;
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
                            value="Nombre"
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
                            name="password"
                            placeholder="Repite tu pasword"
                            value={password}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form"></div>
                        <input type="submit" className="btn btn-primario btn-block" value="Iniciar Sesion"/>
                </forms>
                <Link to={'/'} className="enlace-cuenta">
                    Ir a LogIn
                </Link>
            </div>
        </div>
    );
};

export default Login;
