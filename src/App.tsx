import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Link, Route, Switch } from "react-router-dom";

function App({ router }: { router: any }) {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/pokemon/1">Pokedex</Link>
      </nav>
      <Switch>
        {router.routes.map((route: any) => {
          return (
            <Route exact={route.exact} key={route.path} path={route.path}>
              <route.component />
            </Route>
          );
        })}
      </Switch>
    </div>
  );
}

export default App;
