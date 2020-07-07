import React, { useReducer } from 'react';

import anunciosContext from './anunciosContext';
import anunciosReducer from './anunciosReducers';
import {FORMULARIO_ANUNCIO} from '../../types';


const AnunciosState = props => {
    const initialState = {
            formulario : false
    }

    //dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(anunciosReducer, initialState);


    //serie de funciones para el CRUD
    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_ANUNCIO
        })

    }


    return (
        <anunciosContext.Provider
            value={{
                formulario: state.formulario, // EL STATE LO MANTENEMOS DE ESTA FORMA
                mostrarFormulario //asi mantenmos las funciones
            }}>
            {props.children}
        </anunciosContext.Provider>
        
    )
}

export default AnunciosState;