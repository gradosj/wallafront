
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
    anuncio: [
      ],     
    muestraformanuncio: null

  }

  //Crear dispatch
  const [state, dispatch] = useReducer(AnunciosPRReducer, initialState);

  //Crear las funciones


  // Obtener las tareas de un proyecto
  const mostrarMisAnuncios = async ()  => {
    try {
      
      const resultado = await clienteAxios.get('/api/anunciospr')
      dispatch({
        type: MOSTRAR_MIS_ANUNCIOS,
        payload: resultado.data.anuncios

    })
    
    } catch (error) {
      console.log(error);
    }
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
        anuncios: state.anuncio,
        muestramisanuncios: state.muestramisanuncios,
        mostrarMisAnuncios
      }}>
      {props.children}
    </AnunciosPRContext.Provider>
  );
};


export default AnuncioPRState;