import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  obtenerPokemonesAccion,
  siguientePokemonAccion,
  anteriorPokemonAccion,
  unPokeDetalleAccion,
} from "../redux/pokeDucks";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Button, Typography, List, ListItem } from "@material-ui/core";
import Detalles from "./Detalles";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.primary,
  },
  button: {
    margin: theme.spacing(1),
  },
  buttonInfo: {
    marginLeft: "auto",
  },
  listitem: { textTransform: "uppercase" },
});

const Pokemones = (props) => {
  const dispatch = useDispatch();

  const { classes } = props;

  const pokemones = useSelector((store) => store.pokemones.results);
  const next = useSelector((store) => store.pokemones.next);
  const previous = useSelector((store) => store.pokemones.previous);


 useEffect(() => {
    const fetchData = () => {
      dispatch(obtenerPokemonesAccion());
    };
    fetchData();
  }, [dispatch]);

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Typography variant="h4">Lista de Pokemones</Typography> <br />
            <List>
              {pokemones.map((item, index) => (
                <ListItem
                  //   button
                  divider
                  className={classes.listitem}
                  key={item.name + index}
                >
                  {item.name}
                  <Button
                    onClick={() => dispatch(unPokeDetalleAccion(item.url))}
                    className={classes.buttonInfo}
                    variant="outlined"
                    color="primary"
                  >
                    Info
                  </Button>
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>
        <Grid>
          <Paper className={classes.paper}>
            <Typography variant="h4">Detalle Pokemon</Typography>
            <Detalles></Detalles>
          </Paper>
        </Grid>
      </Grid>
      {pokemones.length === 0 && (
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          size="large"
          onClick={() => dispatch(obtenerPokemonesAccion())}
        >
          Get Pokemones
        </Button>
      )}
      {next && (
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          size="large"
          onClick={() => dispatch(siguientePokemonAccion())}
        >
          siguientes
        </Button>
      )}
      {previous && (
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          size="large"
          onClick={() => dispatch(anteriorPokemonAccion())}
        >
          anteriores
        </Button>
      )}
    </div>
  );
};

Pokemones.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Pokemones);
