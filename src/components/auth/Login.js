import React from "react";

const Login = () => {
    const onChange = () =>{

    }

    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Iniciar Sesion</h1>
                <form action="">
                    <div className="campo-form">
                        <label htmlFor="email"> Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Tu Email"
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="password"> Email</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form"></div>
                        <input type="submit" className="btn btn-primario btn-block" value="Iniciar Sesion"/>
                </form>
            </div>
        </div>
    );
};

export default Login;
