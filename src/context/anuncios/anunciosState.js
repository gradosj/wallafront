import React, { useReducer } from 'react';

import anunciosContext from './anunciosContext';
import anunciosReducer from './anunciosReducers';
import {FORMULARIO_ANUNCIO, LISTADO_FAVORITOS, DATOS_PERSONALES, LISTADO_MIS_ANUNCIOS, OBTENER_PROYECTOS} from '../../types';


const proyectos = [
    {id: 1, nombre: 'Proyecto de prueba'},
    {id: 2, nombre: 'Proyecto de prueba 2'},
    {id: 3, nombre: 'Proyecto de prueba 3'}

];

const AnunciosState = props => {
    const initialState = {
            formulario : false,
            formularioFav: false,
            formularioDatPers: false,
            formularioAnun: false,

    }

    //dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(anunciosReducer, initialState);
    


    //serie de funciones para el CRUD
    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_ANUNCIO
        })

    }

    const listadoFavoritos = () => {
        dispatch({
            type: LISTADO_FAVORITOS
        })
    }

    const mostrarDatPers = () => {
        dispatch({
            type: DATOS_PERSONALES
        })
    }

    const mostrarMisAnuncios = () => {
        dispatch({
            type: LISTADO_MIS_ANUNCIOS
        })
    }

    //OBTENER LOS PROYECTOS (DEPENDE DIRECTAMENTE de la constante de arriba Proyectos 

    const obtenerProyectos = proyectos => { //siempre lo que tome la funcion como parametro es lo que va a ser el payload
        dispatch({
            type: OBTENER_PROYECTOS,
            payload: proyectos
        })

    }


    return (
        <anunciosContext.Provider
            value={{
                formulario: state.formulario, // EL STATE LO MANTENEMOS DE ESTA FORMA
                formularioFav: state.formularioFav,
                formularioDatPers: state.formularioDatPers,
                formularioAnun: state.formularioAnun,
                mostrarFormulario, //asi mantenmos las funciones
                listadoFavoritos,
                mostrarDatPers,
                mostrarMisAnuncios,
                obtenerProyectos

            }}>
            {props.children}
        </anunciosContext.Provider>
        
    )
}

export default AnunciosState;