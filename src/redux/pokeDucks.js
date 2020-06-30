import axios from 'axios'


//constants

const dataInitial = {
    array: []
}
const OBTENER_PONEMOS_EXITO = 'OBTENER_PONEMOS_EXITO'
//reducer

export default function pokeReducer(state = dataInitial, action) {
    switch (action.type) {
        case OBTENER_PONEMOS_EXITO:
            return { ...state, array: action.payload }
        default:
            return state
    }
}

//actions

export const obtenerPokemonesAccion = () => async (dispatch, getState) => {
    try {
        // const res = await axios.get('gs://upload-images-3372b.appspot.com/images')
        const res = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20')

        dispatch({
            type: OBTENER_PONEMOS_EXITO,
            payload: res.data.results
            })
    } catch (error) {
        console.log(error)
    }
}