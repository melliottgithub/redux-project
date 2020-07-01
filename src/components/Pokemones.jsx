import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { obtenerPokemonesAccion, siguientePokemonAccion } from "../redux/pokeDucks";

const Pokemones = () => {
  const dispatch = useDispatch();

  const pokemones = useSelector((store) => store.pokemones.array);

  return (
    <div>
      lista de Pokemones{" "}
      <button onClick={() => dispatch(obtenerPokemonesAccion())}>
        Get Pokemones
      </button>
      <button onClick={() => dispatch(siguientePokemonAccion(20))}>
        More Pokemones
      </button>
      <ul>
        {pokemones.map((item, index) => (
          <li key={item.name + index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Pokemones;
