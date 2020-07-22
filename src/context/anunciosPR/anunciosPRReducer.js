import { MOSTRAR_MIS_ANUNCIOS } from "../../types";

export default (state, action) => {
  switch (action.type) {
    case MOSTRAR_MIS_ANUNCIOS:
      console.log("bonita");
      console.log(action.payload);
      return {
        ...state,
        anuncios: action.payload,
      };

    default:
      return state;
  }
};
