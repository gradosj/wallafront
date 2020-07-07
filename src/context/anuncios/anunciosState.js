import React, { useReducer } from 'react';

import anunciosContext from './anunciosContext';
import anunciosReducer from './anunciosReducers';


const AnunciosState = props => {
    const initialState = {
            formulario : false
    }

    //dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(anunciosReducer, initialState);


    //serie de funciones para el CRUD


    return (
        <anunciosContext.Provider
            value={{
                formulario: state.formulario
            }}>
            {props.children}
        </anunciosContext.Provider>
        
    )
}

export default AnunciosState;