import React, { Fragment, useState, useContext } from "react";
import AnunciosContext from "../../context/anuncios/anunciosContext";
import MisDatPers from "./MisDatPers";

const DatosPersonales = () => {
  // Obtener el state del formulario

  const anunciosContext = useContext(AnunciosContext);
  const { formularioDatPers } = anunciosContext;

  //State para anuncios
  const [anuncio, guardarAnuncio] = useState({
    nombre: "",
  });

  const datosPers = [
    { nombre: "Usuario", password: "password", estado: true },
    
  ];
  return (
    <Fragment>
      {formularioDatPers ? (
        <div>
          <h2>Proyectos: Tienda virtual</h2>

          <ul className="listado-tarea">
            {datosPers.length === 0 ? (
              <li className="misAnuncios">
                <p>No hay anuncios</p>
              </li>
            ) : (
              datosPers.map((datosPers) => <MisDatPers misDatPers={datosPers} />)
            )}
          </ul>
        </div>
      ) : null}
    </Fragment>
  );
};

export default DatosPersonales;
