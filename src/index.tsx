import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import Hello from "./pages/Home/Hello";
import {CONFIGURE_STORE} from "./store/configStore"
import "./index.less"

ReactDOM.render(
  <Provider store={CONFIGURE_STORE()}>
    <Hello />
  </Provider>,
  document.getElementById("root")
);