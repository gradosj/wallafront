import React, { Fragment } from "react";
import MisAnuncios from "./MisAnuncios";

const ListadoFavoritos = () => {
  const anuncios = [
    { nombre: "Nombre anuncio" , descripcion: "Anuncio 1", estado: true },
    { nombre: "Nombre anuncio1", descripcion: "Anuncio 2", estado: false },
    { nombre: "Nombre anuncio2", descripcion: "Anuncio 3", estado: true },
  ];
  return (
    <Fragment>
      <h2>Mis anuncios Favoritos</h2>

      <ul className="listado-tarea">
        {anuncios.length === 0 ? (
          <li className="misAnuncios">
            <p>No hay anuncios</p>
          </li>
        ) : (
          anuncios.map((anuncios) => <MisAnuncios misAnuncios={anuncios} />)
        )}
      </ul>
      <button type="button" className="btn btn-eliminar">
        Eliminar proyecto
      </button>
    </Fragment>
  );
};

export default ListadoFavoritos;
