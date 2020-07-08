import React, { Fragment, useState, useContext } from "react";
import AnunciosContext from "../../context/anuncios/anunciosContext";

const NuevoAnuncioB = () => {
    // Obtener el state del formulario

    const anunciosContext = useContext(AnunciosContext);
    const { formulario, mostrarFormulario } = anunciosContext;

    //State para anuncios
    const [anuncio, guardarAnuncio] = useState({
        nombre: "",
    });

    //Extraer nombre de proyecto
    const { nombre } = anuncio;

    const onChangeAnuncio = (e) => {
        guardarAnuncio({
            ...anuncio,
            [e.target.name]: e.target.value,
        });
    };

    return (

        // formulario principal de la zona privada
        <Fragment>
            {
                formulario ?
                    (
                        <div className="formulario">
                            <form action="">
                                <div className="formulario-nuevo-anuncio">
                                    <input
                                        type="text"
                                        className="input-text"
                                        placeholder="nombre tarea"
                                        name="nombre"
                                    />
                                </div>

                                <div className="formulario-nuevo-anuncio">
                                    <input
                                        type="text"
                                        className="input-text"
                                        placeholder="nombre tarea"
                                        name="nombre"
                                    />
                                </div>

                                <div className="formulario-nuevo-anuncio">
                                    <input
                                        type="text"
                                        className="input-text"
                                        placeholder="nombre tarea"
                                        name="nombre"
                                    />
                                </div>

                                <div className="formulario-nuevo-anuncio">
                                    <input
                                        type="text"
                                        className="input-text"
                                        placeholder="nombre tarea"
                                        name="nombre"
                                    />
                                </div>

                                <div className="formulario-nuevo-anuncio">
                                    <input
                                        type="text"
                                        className="input-text"
                                        placeholder="nombre tarea"
                                        name="nombre"
                                    />
                                </div>

                                <div className="formulario-nuevo-anuncio">
                                    <input
                                        type="submit"
                                        className="btn btn-primario btn-submit btn-block "
                                        placeholder="nombre tarea"
                                        value="Agregar Tarea"
                                        onClick={() => mostrarFormulario()}
                                        onChange={onChangeAnuncio}
                                    />
                                </div>
                            </form>
                        </div>
                    ) : null
            }

        </Fragment>
    );
};

export default NuevoAnuncioB;
