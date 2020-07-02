import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { unPokeDetalleAccion } from "../redux/pokeDucks";

import { Card, Typography, CardContent } from "@material-ui/core";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  cap: { textTransform: "capitalize" },
});

const Detalles = (props) => {
  const dispatch = useDispatch();

  const { classes } = props;

  useEffect(() => {
    const fetchData = () => {
      dispatch(unPokeDetalleAccion());
    };
    fetchData();
  }, [dispatch]);

  const pokemon = useSelector((store) => store.pokemones.unPokemon);

  return pokemon ? (
    <Card>
      <CardContent>
        <Typography className={classes.cap} color="textPrimary">
          {pokemon.nombre}
        </Typography>
        <img src={pokemon.foto} alt=""></img>
        <Typography color="textSecondary">
          Alto: {pokemon.alto} | Ancho: {pokemon.ancho}
        </Typography>
      </CardContent>
    </Card>
  ) : null;
};

Detalles.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Detalles);
