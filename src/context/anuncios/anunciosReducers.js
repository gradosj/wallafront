import {
  FORMULARIO_ANUNCIO,
  LISTADO_FAVORITOS,
  DATOS_PERSONALES,
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case FORMULARIO_ANUNCIO:
      return {
        ...state,
        formulario: true,
      };
    case LISTADO_FAVORITOS:
      return {
        ...state,
        formularioFav: true,
      };
    case DATOS_PERSONALES:
      return {
        ...state,
        formularioDatPers: true,
      };

    default:
      return state;
  }
};
