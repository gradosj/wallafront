import React, { useReducer } from "react";
import AnunciosPRContext from "./anunciosPRContext";
import AnunciosPRReducer from "./anunciosPRReducer";

import { MOSTRAR_MIS_ANUNCIOS } from "./../../types";

import clienteAxios from "./../../config/axios";

const AnuncioPRState = (props) => {
  const initialState = {
    anunciospr: [],
  };

  //Crear dispatch
  const [state, dispatch] = useReducer(AnunciosPRReducer, initialState);

  const mostrarMisAnuncios = async () => {
    try {
      const resultado = await clienteAxios.get("/api/anunciospr");
      dispatch({
        type: MOSTRAR_MIS_ANUNCIOS,
        payload: resultado.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AnunciosPRContext.Provider
      value={{
        anunciospr: state.anunciospr,
        muestramisanuncios: state.muestramisanuncios,
        mostrarMisAnuncios,
      }}
    >
      {props.children}
    </AnunciosPRContext.Provider>
  );
};

export default AnuncioPRState;
