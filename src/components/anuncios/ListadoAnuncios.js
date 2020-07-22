import React, { Fragment, useEffect, useContext } from "react";
import MisAnuncios from "./MisAnuncios";
import AnunciosContext from "../../context/anuncios/anunciosContext";
import AnunciosPRContext from "../../context/anunciosPR/anunciosPRContext";

const ListadoAnuncios = () => {
  console.log("listado anuncios");
  // Obtener el state del formulario

  //extraemos del state inicial y revisamos si tiene contenido
  const anunciosContext = useContext(AnunciosContext);
  const { formularioAnun } = anunciosContext;

  //obtenemos los anuncios del usuario
  const anunciosPRContext = useContext(AnunciosPRContext);
  const { anunciospr, mostrarMisAnuncios } = anunciosPRContext;

  return (
    <Fragment>
      {formularioAnun ? (
        <div>
          <h2>Listado anuncios</h2>
          <button
            onClick={() => mostrarMisAnuncios()}
            type="button"
            className="btn btn-eliminar"
          >
            Ver
          </button>

          <ul className="listado-tarea">
            {anunciospr.length === 0 ? (
              <li className="misAnuncios">
                <p>No hay anuncios</p>
              </li>
            ) : (
              anunciospr.map((anunciospr) => (
                <MisAnuncios misAnuncios={anunciospr} />
              ))
            )}
          </ul>
        </div>
      ) : null}
    </Fragment>
  );
};

export default ListadoAnuncios;
