import {
  FORMULARIO_ANUNCIO,
  LISTADO_FAVORITOS,
  DATOS_PERSONALES,
  LISTADO_MIS_ANUNCIOS,
  OBTENER_PROYECTOS,
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case FORMULARIO_ANUNCIO:
      return {
        ...state,
        formulario: true,
        formularioFav: false,
        formularioDatPers: false,
        formularioAnun: false

      };
    case LISTADO_FAVORITOS:
      return {
        ...state,
        formulario: false,
        formularioFav: true,
        formularioDatPers: false,
        formularioAnun: false
      };
    case DATOS_PERSONALES:
      return {
        ...state,
        formulario: false,
        formularioFav: false,
        formularioDatPers: true,
        formularioAnun: false
      };
    
      case LISTADO_MIS_ANUNCIOS:
      return {
        ...state,
        formulario: false,
        formularioFav: false,
        formularioDatPers: false,
        formularioAnun: true
      };
      case OBTENER_PROYECTOS:
        return {
          ...state,
          proyectos: action.payload
        }

    default:
      return state;
  }
};
