import React, { Fragment, useState, useContext } from "react";
import MisAnuncios from "./MisAnuncios";
import AnunciosContext from "../../context/anuncios/anunciosContext";

const ListadoFavoritos = () => {
  // Obtener el state del formulario

  const anunciosContext = useContext(AnunciosContext);
  const { formularioFav, mostrarFormulario } = anunciosContext;

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

  const anuncios = [
    { nombre: "Nombre anuncio", descripcion: "Anuncio 1", estado: true },
    { nombre: "Nombre anuncio1", descripcion: "Anuncio 2", estado: false },
    { nombre: "Nombre anuncio2", descripcion: "Anuncio 3", estado: true },
  ];
  return (
    <Fragment>
         {
                formularioFav ?
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

export default ListadoFavoritos;
