import React, { useContext } from "react";
import AnunciosPRContext from "../../context/anunciosPR/anunciosPRContext";

const MisAnuncios = ({ misAnuncios }) => {
 

  return (
    <li className="tarea sombra">
      <p>{misAnuncios.nombre}</p>
      <div className="estado">
        {misAnuncios.estado ? (
          <button type="buttom" className="completo">
            Completo
          </button>
        ) : (
          <button type="buttom" className="incompleto">
            Incompleto
          </button>
        )}
      </div>
      <div className="acciones">
        <button type="button" className="btn btn-primario">
          Editar
        </button>

        <button type="button" className="btn btn-secundario">
          Eliminar
        </button>
      </div>
    </li>
  );
};

export default MisAnuncios;
