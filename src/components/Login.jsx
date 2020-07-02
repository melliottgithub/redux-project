import React, { Fragment, useEffect } from "react";
import { withRouter } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { Button, Typography, Box, makeStyles } from "@material-ui/core";
import { ingresoUsuarioAccion } from "../redux/usuarioDucks";

const useStyles = makeStyles((theme) => ({
  Button: {
    marginTop: theme.spacing(2),
  },
}));

const Login = (props) => {
  const dispatch = useDispatch();
  const loading = useSelector((store) => store.usuario.loading);
  const activo = useSelector((store) => store.usuario.activo);

  const classes = useStyles();

  useEffect(() => {
    if (activo) {
      props.history.push("/");
    }
  }, [activo, props.history]);

  return (
    <Fragment>
      <Box display="flex" justifyContent="center" borderBottom={1}>
        <Typography variant="h2">Ingreso con Google</Typography>
      </Box>
      <Box display="flex" justifyContent="center">
        <Button
          disabled={loading}
          onClick={() => dispatch(ingresoUsuarioAccion())}
          className={classes.Button}
          //   component={Link}
          //   to="/"
          color="primary"
          variant="contained"
        >
          Acceder
        </Button>
      </Box>
    </Fragment>
  );
};

export default withRouter(Login);
