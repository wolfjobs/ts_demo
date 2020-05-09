import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {CONFIGURE_STORE} from "./store/configStore"
import "./index.less"
import TSRouter from "./pages/router";

const store = CONFIGURE_STORE();
ReactDOM.render(
  <Provider store={store}>
    <TSRouter/>
  </Provider>,
  document.getElementById("root")
);