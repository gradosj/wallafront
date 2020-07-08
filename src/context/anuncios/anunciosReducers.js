import {FORMULARIO_ANUNCIO, LISTADO_FAVORITOS} from '../../types';

export default (state, action) => {

    switch(action.type) {
        case FORMULARIO_ANUNCIO:
            return {
                ...state,
                formulario: true
            }
        case LISTADO_FAVORITOS:
            return {
                ...state,
                formularioFav: true
            }
        default:
            return state;
            
    }
}