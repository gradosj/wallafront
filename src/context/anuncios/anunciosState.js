import React, { useReducer } from 'react';

import anunciosContext from './anunciosContext';
import anunciosReducer from './anunciosReducers';
import {FORMULARIO_ANUNCIO, LISTADO_FAVORITOS, DATOS_PERSONALES, LISTADO_MIS_ANUNCIOS} from '../../types';


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
                mostrarMisAnuncios

            }}>
            {props.children}
        </anunciosContext.Provider>
        
    )
}

export default AnunciosState;