/**
 *
 * @author fengjun
 * @build 2020/4/30 10:44 上午
 * @name reducers
 * @description
 */
import {HomeReducer} from "../pages/Home/store/reducer";
import { combineReducers } from "redux";


export const AppReducers = combineReducers({
  home: HomeReducer
});