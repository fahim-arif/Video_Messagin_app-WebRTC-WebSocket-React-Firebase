import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "../screens/HomePage";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={HomePage}></Route>
          <Route path='/login' component={Login}></Route>
          <Route path='/register' component={Register}></Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
