import React, { Fragment, useState, useContext } from "react";
import MisAnuncios from "./MisAnuncios";
import AnunciosContext from "../../context/anuncios/anunciosContext";

const ListadoAnuncios = () => {
  // Obtener el state del formulario

  const anunciosContext = useContext(AnunciosContext);
  const { formularioAnun, mostrarMisAnuncios } = anunciosContext;

  //State para anuncios
  const [anuncio, guardarAnuncio] = useState({
    nombre: "",
  });

  const anuncios = [
    { nombre: "Nombre anuncio", estado: true },
    { nombre: "Nombre anuncio1", estado: false },
    { nombre: "Nombre anuncio2", estado: true },
  ];
  return (
    <Fragment>
      {formularioAnun ? (
        <div>
          <h2>Proyectos: Tienda virtual</h2>

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
        </div>
      ) : null}
    </Fragment>
  );
};

export default ListadoAnuncios;
