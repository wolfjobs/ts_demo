/**
 *
 * @author fengjun
 * @build 2020/4/29 4:29 下午
 * @name configStore
 * @description
 */
import {applyMiddleware, compose, createStore} from "redux";
import thunk from "redux-thunk"
import {AppReducers} from "./reducers";


const composeEnhancers = compose;
const middleWares = composeEnhancers(applyMiddleware(thunk));
const store = createStore(AppReducers, middleWares);

export const CONFIGURE_STORE = () => {
  return store;
};
