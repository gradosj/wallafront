import React, { Fragment, useState, useContext } from "react";
import AnunciosContext from "../../context/anuncios/anunciosContext";

const NuevoAnuncion = () => {
  // Obtener el state del formulario

  const anunciosContext = useContext(AnunciosContext);
  const {
    formulario,
    mostrarFormulario,
    listadoFavoritos,
    mostrarMisAnuncios,
    mostrarDatPers
  } = anunciosContext;

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
    <Fragment>
      <button
        type="button"
        className="btn btn-block btn-primario"
        onClick={() => mostrarFormulario()}
      >
        {" "}
        Nuevo Anuncio{" "}
      </button>

      {formulario ? (
        <form className="formulario-nuevo-anuncio">
          <input
            type="text"
            className="input-text"
            placeholder="Nombre Proyecto"
            name="nombre"
            value={nombre}
            onChange={onChangeAnuncio}
          />
        </form>
      ) : null}

      
      <button
        type="button"
        className="btn btn-block btn-primario"
        onClick={() => mostrarMisAnuncios()}
      >
        {" "}
        Mis Anuncios{" "}
      </button>

      <button
        type="button"
        className="btn btn-block btn-primario"
        onClick={() => listadoFavoritos()}
      >
        {" "}
        Favoritos{" "}
      </button>

      <button
        type="button"
        className="btn btn-block btn-primario"
        onClick={() => mostrarDatPers()}
      >
        {" "}
        Datos Personales{" "}
      </button>
    </Fragment>
  );
};

export default NuevoAnuncion;
