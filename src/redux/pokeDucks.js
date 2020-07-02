import axios from "axios";

//constants

const dataInitial = {
  count: 0,
  next: null,
  previous: null,
  results: [],
  //   unPokemon: [],
};
const OBTENER_PONEMOS_EXITO = "OBTENER_PONEMOS_EXITO";
const SIGUIENTE_POKEMONES_EXITO = "SIGUIENTE_POKEMONES_EXITO";
const POKE_INFO_EXITO = "POKE_INFO_EXITO";
//reducer

export default function pokeReducer(state = dataInitial, action) {
  switch (action.type) {
    case OBTENER_PONEMOS_EXITO:
      return { ...state, ...action.payload };
    case SIGUIENTE_POKEMONES_EXITO:
      return { ...state, ...action.payload };
    case POKE_INFO_EXITO:
      return { ...state, unPokemon: action.payload };
    default:
      return state;
  }
}

//actions
export const unPokeDetalleAccion = (
  url = "https://pokeapi.co/api/v2/pokemon/1/"
) => async (dispatch) => {

    if (localStorage.getItem(url)) {
    dispatch({
      type: POKE_INFO_EXITO,
      payload: JSON.parse(localStorage.getItem(url)),
    });
    return;
  }

  try {
    const res = await axios.get(url);
    dispatch({
      type: POKE_INFO_EXITO,
      payload: {
        nombre: res.data.name,
        ancho: res.data.weight,
        alto: res.data.height,
        foto: res.data.sprites.front_default,
      },
    });
    localStorage.setItem(
      url,
      JSON.stringify({
        nombre: res.data.name,
        ancho: res.data.weight,
        alto: res.data.height,
        foto: res.data.sprites.front_default,
      })
    );
  } catch (error) {
    console.log(error);
  }
};

export const obtenerPokemonesAccion = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?offset=0&limit=5"
    );

    dispatch({
      type: OBTENER_PONEMOS_EXITO,
      payload: res.data,
    });
    localStorage.setItem("offset=0", JSON.stringify(res.data));
  } catch (error) {
    console.log(error);
  }
};

export const siguientePokemonAccion = () => async (dispatch, getState) => {
  const { next } = getState().pokemones;
  if (localStorage.getItem(next)) {
    dispatch({
      type: OBTENER_PONEMOS_EXITO,
      payload: JSON.parse(localStorage.getItem(next)),
    });
    return;
  }
  try {
    const res = await axios.get(next);
    dispatch({
      type: SIGUIENTE_POKEMONES_EXITO,
      payload: res.data,
    });
    localStorage.setItem(next, JSON.stringify(res.data));
  } catch (error) {
    console.log(error);
  }
};

export const anteriorPokemonAccion = () => async (dispatch, getState) => {
  const { previous } = getState().pokemones;
  if (localStorage.getItem(previous)) {
    dispatch({
      type: OBTENER_PONEMOS_EXITO,
      payload: JSON.parse(localStorage.getItem(previous)),
    });
    return;
  }
  try {
    const res = await axios.get(previous);
    dispatch({
      type: SIGUIENTE_POKEMONES_EXITO,
      payload: res.data,
    });
    localStorage.setItem(previous, JSON.stringify(res.data));
  } catch (error) {
    console.log(error);
  }
};
