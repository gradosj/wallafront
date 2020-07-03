import React, { Fragment } from "react";
import MisAnuncios from "./MisAnuncios";

const ListadoAnuncios = () => {

    const anuncios = [
        {nombre: 'Nombre anuncio', estado: true},
        {nombre: 'Nombre anuncio1', estado: false},
        {nombre: 'Nombre anuncio2', estado: true},
        
    ];
  return (
    <Fragment>
      <h2>Proyectos: Tienda virtual</h2>

      <ul className="listado-tarea">
          {anuncios.length === 0
            ? (<li className="misAnuncios"><p>No hay anuncios</p></li>) 
            : anuncios.map(anuncios => (
                <MisAnuncios misAnuncios={anuncios}/>
                    
                
            )) 
          }
      </ul>
    </Fragment>
  );
};


export default ListadoAnuncios;
