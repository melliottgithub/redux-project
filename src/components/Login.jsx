import React, { Fragment } from "react";
// import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";

import { Button, Typography, Box, makeStyles } from "@material-ui/core";
import { ingresoUsuarioAccion } from "../redux/usuarioDucks";

const useStyles = makeStyles((theme) => ({
  Button: {
    marginTop: theme.spacing(2),
  },
}));

const Login = (props) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Fragment>
      <Box display="flex" justifyContent="center" borderBottom={1}>
        <Typography variant="h1">Ingreso con Google</Typography>
      </Box>
      <Box display="flex" justifyContent="center">
        <Button
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

export default Login;
