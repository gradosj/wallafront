import React, { Fragment, useEffect, useContext } from "react";
import MisAnuncios from "./MisAnuncios";
import AnunciosContext from "../../context/anuncios/anunciosContext";
import AnunciosPRContext from "../../context/anunciosPR/anunciosPRContext";
import { OBTENER_PROYECTOS } from "../../types";

const ListadoAnuncios = () => {
  // Obtener el state del formulario

  //extraemos del state inicial y revisamos si tiene contenido
  const anunciosContext = useContext(AnunciosContext);
  const { formularioAnun } = anunciosContext;

  //obtenemos los anuncios del usuario
  const anunciosPRContext = useContext(AnunciosPRContext);
    const {anuncios} = anunciosPRContext;

 // MOSTRAR ERROR DE VALIDACION DE FORMULARIO --> 206
// nunca puede haber un return antes del useEffect REPASAR CLASE 205

  //  useEffect(() => {
    //obtenerProyectos(); Esta funcion deberia extraerse tambien del context

  //}, []);
    // if (proyectos.length === 0) return null; 


  


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
