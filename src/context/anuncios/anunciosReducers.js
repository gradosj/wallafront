import {FORMULARIO_ANUNCIO} from '../../types';

export default (state, action) => {

    switch(action.type) {
        case FORMULARIO_ANUNCIO:
            return {
                ...state,
                formulario: true
            }
        default:
            return state;
            
    }
}