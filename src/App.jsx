import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Pokemones from "./components/Pokemones";
import Login from "./components/Login";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route component={Pokemones} path='/' exact></Route>
        <Route component={Login} path='/login' exact></Route>
      </Switch>
    </Router>
  );
}

export default App;
