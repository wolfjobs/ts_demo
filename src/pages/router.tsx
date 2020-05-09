/**
 *
 * @author fengjun
 * @build 2020/4/30 5:16 下午
 * @name router
 * @description
 */

import React from "react";
import {Redirect, Route, Switch, withRouter} from "react-router";
import {BrowserRouter} from "react-router-dom";
import Hello from "./Hello/Hello";
import Home from "./Home";


const TSRouter = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact key={'/'} path={'/'} render={() => {
          document.title = "Home";
          return <Home/>
        }}/>
        <Route exact key={'/hello'} path={'/hello'} render={() => {
          document.title = "typescript";
          return <Hello/>
        }}/>
      </Switch>
    </BrowserRouter>
  )
};

export default TSRouter;
