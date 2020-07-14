
import React, { useReducer } from "react";
import AnunciosPRContext from "./anunciosPRContext";
import AnunciosPRReducer from "./anunciosPRReducer";

import {MOSTRAR_MIS_ANUNCIOS} from './../../types';


const AnuncioPRState = (props) => {
  const initialState = {
    anuncios: [
        { nombre: "Nombre anuncio", estado: true, anuncioId: 1},
        { nombre: "Nombre anuncio1", estado: false, anuncioId: 1},
        { nombre: "Nombre anuncio2", estado: true, anuncioId: 2}],
        muestramisanuncios: null
    
}

  //Crear dispatch
  const [state, dispatch] = useReducer(AnunciosPRReducer, initialState);

  //Crear las funciones


  // Obtener las tareas de un proyecto
  const mostrarMisAnuncios = anuncioId => {
      dispatch({
          type: MOSTRAR_MIS_ANUNCIOS,
          payload: anuncioId
      });
  }


  return (
    <AnunciosPRContext.Provider
    value={{
        anuncios: state.anuncios,
        muestramisanuncios: state.muestramisanuncios,
        mostrarMisAnuncios
    }}>
        {props.children}
    </AnunciosPRContext.Provider>
  );
};


export default AnuncioPRState;