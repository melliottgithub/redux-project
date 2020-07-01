import axios from "axios";

//constants

const dataInitial = {
  array: [],
  offset: 0,
};
const OBTENER_PONEMOS_EXITO = "OBTENER_PONEMOS_EXITO";
const SIGUIENTE_POKEMONES_EXITO = "SIGUIENTE_POKEMONES_EXITO";
//reducer

export default function pokeReducer(state = dataInitial, action) {
  switch (action.type) {
    case OBTENER_PONEMOS_EXITO:
      return { ...state, array: action.payload };
    case SIGUIENTE_POKEMONES_EXITO:
      return {
        ...state,
        array: action.payload.array,
        offset: action.payload.offset,
      };
    default:
      return state;
  }
}

//actions

export const obtenerPokemonesAccion = () => async (dispatch, getState) => {
  const { offset } = getState().pokemones;

  try {
    // const res = await axios.get('gs://upload-images-3372b.appspot.com/images')
    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`
    );

    dispatch({
      type: OBTENER_PONEMOS_EXITO,
      payload: res.data.results,
    });
  } catch (error) {
    console.log(error);
  }
};

export const siguientePokemonAccion = (numero) => async (dispatch, getState) => {
  const { offset } = getState().pokemones;
  const siguiente = offset + numero;

  try {
    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`
    );
    dispatch({
      type: SIGUIENTE_POKEMONES_EXITO,
      payload: {
        array: res.data.results,
        offset: siguiente,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
