import React, { useReducer } from "react";

import anunciosContext from "./anunciosContext";
import anunciosReducer from "./anunciosReducers";
import clienteAxios from "../../config/axios";
import {
  FORMULARIO_ANUNCIO,
  AGREGAR_ANUNCIO,
  LISTADO_FAVORITOS,
  DATOS_PERSONALES,
  LISTADO_MIS_ANUNCIOS,
  OBTENER_PROYECTOS,
} from "../../types";

const AnunciosState = (props) => {
  const initialState = {
    formulario: false,
    formularioFav: false,
    formularioDatPers: false,
    formularioAnun: false,
  };

  //dispatch para ejecutar las acciones
  const [state, dispatch] = useReducer(anunciosReducer, initialState);

  //serie de funciones para el CRUD
  const mostrarFormulario = () => {
    dispatch({
      type: FORMULARIO_ANUNCIO,
    });
  };

  const listadoFavoritos = () => {
    dispatch({
      type: LISTADO_FAVORITOS,
    });
  };

  const mostrarDatPers = () => {
    dispatch({
      type: DATOS_PERSONALES,
    });
  };

  const mostrarMisAnuncios = () => {
    dispatch({
      type: LISTADO_MIS_ANUNCIOS,
    });
  };

   const obtenerProyectos = (proyectos) => {
    //siempre lo que tome la funcion como parametro es lo que va a ser el payload
    dispatch({
      type: OBTENER_PROYECTOS,
      payload: proyectos,
    });
  };

  // Agregar un anuncio
  const agregarAnuncio = async (anuncio) => {
    console.log(anuncio);
    try {
      const resultado = await clienteAxios.post("/api/anuncios/post", anuncio);
      console.log(resultado);
      dispatch({
        type: AGREGAR_ANUNCIO,
        payload: anuncio,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <anunciosContext.Provider
      value={{
        formulario: state.formulario, // EL STATE LO MANTENEMOS DE ESTA FORMA
        formularioFav: state.formularioFav,
        formularioDatPers: state.formularioDatPers,
        formularioAnun: state.formularioAnun,
        mostrarFormulario, //asi mantenmos las funciones
        listadoFavoritos,
        agregarAnuncio,
        mostrarDatPers,
        mostrarMisAnuncios,
        obtenerProyectos,
      }}
    >
      {props.children}
    </anunciosContext.Provider>
  );
};

export default AnunciosState;
