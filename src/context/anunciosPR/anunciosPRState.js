
import React, { useReducer } from "react";
import AnunciosPRContext from "./anunciosPRContext";
import AnunciosPRReducer from "./anunciosPRReducer";

import {
  MOSTRAR_MIS_ANUNCIOS,
  AGREGAR_ANUNCIO
} from './../../types';

import clienteAxios from "./../../config/axios";

const AnuncioPRState = (props) => {
  const initialState = {
    anuncios: [
      { nombre: "Desde el front",
        venta: true,
        precio: 5,
        foto: "foto.jpg",
        descripcion: "descripcion",
        tags : ['tag']}],
    
     
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



  const agregarAnuncio = async anuncio => {
    try {

      const resultado = await clienteAxios.post('/api/anuncios/post', anuncio);      
    } catch (error) {
      console.log(error);

    }


    dispatch({
      type: AGREGAR_ANUNCIO,
      payload: anuncio
    })
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