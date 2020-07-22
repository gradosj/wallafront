import { MOSTRAR_MIS_ANUNCIOS } from "../../types";

export default (state, action) => {
  switch (action.type) {
    case MOSTRAR_MIS_ANUNCIOS:
     
      return {
        ...state,
        anuncios: action.payload,
      };

    default:
      return state;
  }
};
