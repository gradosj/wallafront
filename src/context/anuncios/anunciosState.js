import React, { useReducer } from 'react';

import anunciosContext from './anunciosContext';
import anunciosReducer from './anunciosReducers';
import {FORMULARIO_ANUNCIO, LISTADO_FAVORITOS, DATOS_PERSONALES} from '../../types';


const AnunciosState = props => {
    const initialState = {
            formulario : false,
            formularioFav: false,
            formularioDatPers: false,

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


    return (
        <anunciosContext.Provider
            value={{
                formulario: state.formulario, // EL STATE LO MANTENEMOS DE ESTA FORMA
                formularioFav: state.formularioFav,
                formularioDatPers: state.formularioDatPers,
                mostrarFormulario, //asi mantenmos las funciones
                listadoFavoritos,
                mostrarDatPers

            }}>
            {props.children}
        </anunciosContext.Provider>
        
    )
}

export default AnunciosState;