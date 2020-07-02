import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Button, Typography, Box } from "@material-ui/core";

const Login = () => {
  return (
    <Fragment>
      <Box display="flex" justifyContent="center" borderBottom={1}>
        <Typography variant="h1">Ingreso con Google</Typography>
      </Box>
      <Box display="flex" justifyContent="center">
        <Button
          align
          component={Link}
          to="/"
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
