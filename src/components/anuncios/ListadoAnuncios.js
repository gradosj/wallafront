import React, { Fragment } from "react";
import MisAnuncios from "./MisAnuncios";

const ListadoAnuncios = () => {

    const anuncios = [
        {nombre: 'Nombre anuncio', estado: true},
        {nombre: 'Nombre anuncio1', estado: true},
        {nombre: 'Nombre anuncio2', estado: true},
        {nombre: 'Nombre anuncio3', estado: true},
    ];
  return (
    <Fragment>
      <h2>Proyectos: Tienda virtual</h2>

      <ul className="listado-anuncios">
          {anuncios.length === 0
            ? (<li className="misAnuncios"><p>No hay anuncios</p></li>) 
            : anuncios.map(misAnuncios => (
                <MisAnuncios misAnuncios={anuncios}>
                    
                </MisAnuncios>
            )) 
          }
      </ul>
    </Fragment>
  );
};


export default ListadoAnuncios;
