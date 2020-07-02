import React, { Fragment } from "react";

import { withRouter } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { cerrarSesionAccion } from "../redux/usuarioDucks";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing(2),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Navbar(props) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const activo = useSelector((store) => store.usuario.activo);

  const cerrarSesion = () => {
    dispatch(cerrarSesionAccion());
    props.history.push("/login");
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Button color="inherit">Pokemon App</Button>
          </Typography>
          {activo ? (
            <Fragment>
              <Button component={Link} to="/" color="inherit">
                Inicio
              </Button>
              <Button onClick={() => cerrarSesion()} color="inherit">
                Cerrar Sesion
              </Button>
            </Fragment>
          ) : (
            <Button component={Link} to="/login" color="inherit">
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withRouter(Navbar);
