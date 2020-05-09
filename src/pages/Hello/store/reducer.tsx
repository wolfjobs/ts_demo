/**
 *
 * @author fengjun
 * @build 2020/4/29 4:30 下午
 * @name reducer
 * @description
 */
import {MINUS_CONST, PLUS_CONST} from "../../../store/constants";
import {operationAction} from "./action";

export interface I_state {
  count: number
}

const init_state = {
  count: 1
};


export const HomeReducer = (state = init_state, action: operationAction): I_state => {
  switch (action.type) {

    case PLUS_CONST:
      return {...state, count: state.count + 1};
    case MINUS_CONST:
      return {...state, count: state.count - 1};

    default:
      return state
  }
};